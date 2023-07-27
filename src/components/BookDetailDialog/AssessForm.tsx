import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { Check, X } from '@phosphor-icons/react'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Input } from '../Input'
import { Rating } from '../Rating'
import { AssessButton } from './AssessButton'

export function AssessForm() {
  const { data } = useSession()

  const [isShowingForm, setIsShowingForm] = useState(false)

  function handleToggleShowingForm() {
    setIsShowingForm((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-gray-200">Avaliações</span>
        {isShowingForm ? (
          <div />
        ) : (
          <AssessButton onToggleForm={handleToggleShowingForm} />
        )}
      </div>
      {isShowingForm && (
        <form className="rounded-lg bg-gray-700 p-6">
          <div className="flex items-center justify-between gap-4">
            <Avatar src={data?.user?.image!} alt="" />
            <span className="w-full text-heading-xs font-bold text-gray-100">
              {data?.user?.name}
            </span>
            <Rating rate={4} />
          </div>

          <div className="relative pb-4 pt-6">
            <Input.Root>
              <Input.Field asChild>
                <textarea
                  className="h-36 resize-none bg-transparent"
                  maxLength={450}
                />
              </Input.Field>
            </Input.Root>
            <span className="absolute bottom-5 right-2 text-xs text-gray-400">
              0/450
            </span>
          </div>

          <div className="flex  items-center justify-end gap-2">
            <Button type="button" onClick={handleToggleShowingForm}>
              <X size={24} />
            </Button>
            <Button type="submit">
              <Check size={24} className="text-green-100" />
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
