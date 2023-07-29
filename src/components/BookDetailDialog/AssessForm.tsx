import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from '@phosphor-icons/react'
import { z } from 'zod'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Input } from '../Input'
import { AssessButton } from './AssessButton'
import { CommentLength } from './CommentLength'
import { RatingInput } from './RatingInput'

const assessFormSchema = z.object({
  comment: z.string().trim().min(1).max(450),
  rate: z.number().min(0).max(5),
})

export type AssessFormData = z.infer<typeof assessFormSchema>

export function AssessForm() {
  const { data } = useSession()
  const methods = useForm<AssessFormData>({
    resolver: zodResolver(assessFormSchema),
    defaultValues: {
      comment: '',
      rate: 0,
    },
  })
  const [isShowingForm, setIsShowingForm] = useState(false)

  const {
    register,
    reset,
    formState: { isValid },
    handleSubmit,
  } = methods
  const isInvalid = !isValid

  function handleToggleShowingForm() {
    setIsShowingForm((prevState) => !prevState)
  }

  function handleResetForm() {
    reset()
    setIsShowingForm(false)
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
        <FormProvider {...methods}>
          <form
            className="rounded-lg bg-gray-700 p-6"
            onSubmit={handleSubmit(console.log)}
          >
            <div className="flex items-center justify-between gap-4">
              <Avatar src={data?.user?.image!} alt="" />
              <span className="w-full text-heading-xs font-bold text-gray-100">
                {data?.user?.name}
              </span>
              <RatingInput />
            </div>

            <div className="relative pb-4 pt-6">
              <Input.Root>
                <Input.Field asChild>
                  <textarea
                    className="h-32 resize-none bg-transparent"
                    maxLength={450}
                    {...register('comment')}
                  />
                </Input.Field>
              </Input.Root>
              <CommentLength />
            </div>

            <div className="flex  items-center justify-end gap-2">
              <Button type="button" onClick={handleResetForm}>
                <X size={24} />
              </Button>
              <Button type="submit" disabled={isInvalid}>
                <Check size={24} className="text-green-100" />
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  )
}
