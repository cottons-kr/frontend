'use client'

import Button from '@/components/ui/Button'
import { VStack, Flex, HStack } from '@cottons-kr/react-foundation'
import MemberPreview from '../../MemberPreview'
import Typo from '@/components/ui/Typography'
import { useContext } from 'react'
import { RoomDetailContext } from '@/app/rooms/[id]/context'
import { getApiUrl } from '@/utils/api'
import { getAccessToken } from '@/utils/auth'
import { useRouter } from 'next/navigation'

import s from './style.module.scss'

export default function RoomDetailPrepare() {
  const { ROOM_ID, members } = useContext(RoomDetailContext)
  const router = useRouter()

  const onClickLeave = async () => {
    await fetch(getApiUrl(`/room/${ROOM_ID}/exit`), {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
    router.push('/rooms')
  }

  const onClickStart = async () => {

  }

  return <>
    <VStack align='center' justify='center' gap={76}>
      <VStack align='center' justify='center' gap={55}>
        <Flex className={s.roomId} align='center' justify='center'>
          <Typo size={18}>Room : {ROOM_ID.padStart(3, '0')}</Typo>
        </Flex>
        <HStack
          wrap gap={111}
          style={{ width: 942 }}
        >{
          Array.from({ length: 8 }).map((_, i) => <MemberPreview key={i} name={members[i]?.name} />)
        }</HStack>
      </VStack>

      <HStack justify='center' gap={20}>
        <Button style={{ width: 189 }} onClick={onClickLeave}>
          <Typo size={18}>나가기</Typo>
        </Button>
        <Button variant='secondary' style={{ width: 189 }} onClick={onClickStart}>
          <Typo size={18}>시작하기</Typo>
        </Button>
      </HStack>
    </VStack>
  </>
}