import Image from 'next/image'

import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from '@phosphor-icons/react'
import dayjs from 'dayjs'

import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { Layout } from '@/components/Layouts'
import { Rating } from '@/components/Rating'
import { Sidebar } from '@/components/Sidebar'
import { useCurrentUser } from '@/queries'

export default function Profile() {
  const { data: user } = useCurrentUser()

  const year = dayjs(user?.created_at).get('years')

  return (
    <Layout.Root>
      <Sidebar />
      <Layout.Content>
        <h1 className="flex gap-3 text-heading-lg font-bold">
          <User className="h-8 w-8 text-green-100" weight="bold" />
          Perfil
        </h1>
        <main className="grid grid-cols-[624px_1fr] gap-16 pb-5">
          <div className="flex w-full flex-col gap-8">
            <Input.Root>
              <Input.Field placeholder="Buscar livro avaliado" />
              <Input.Icon>
                <MagnifyingGlass />
              </Input.Icon>
            </Input.Root>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <time className="text-sm text-gray-300">há 2 dias</time>
                <div className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
                  <div className="flex gap-6">
                    <Image
                      src="/images/books/entendendo-algoritmos.png"
                      alt=""
                      className="h-[134px] w-[98px] rounded"
                      width={98}
                      height={134}
                    />
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col">
                        <strong className="text-heading-sm font-bold">
                          Entendendo algoritmos
                        </strong>
                        <span className="text-sm text-gray-400">
                          Aditya Bhargava
                        </span>
                      </div>
                      <Rating rate={4} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque animi ipsum sit earum quaerat porro veniam
                    aliquid neque totam. Repellendus nisi voluptatibus quas
                    sapiente eaque dicta temporibus dolor cupiditate
                    accusantium?
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <time className="text-sm text-gray-300">há 2 dias</time>
                <div className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
                  <div className="flex gap-6">
                    <Image
                      src="/images/books/entendendo-algoritmos.png"
                      alt=""
                      className="h-[134px] w-[98px] rounded"
                      width={98}
                      height={134}
                    />
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col">
                        <strong className="text-heading-sm font-bold">
                          Entendendo algoritmos
                        </strong>
                        <span className="text-sm text-gray-400">
                          Aditya Bhargava
                        </span>
                      </div>
                      <Rating rate={4} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque animi ipsum sit earum quaerat porro veniam
                    aliquid neque totam. Repellendus nisi voluptatibus quas
                    sapiente eaque dicta temporibus dolor cupiditate
                    accusantium?
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <time className="text-sm text-gray-300">há 2 dias</time>
                <div className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
                  <div className="flex gap-6">
                    <Image
                      src="/images/books/entendendo-algoritmos.png"
                      alt=""
                      className="h-[134px] w-[98px] rounded"
                      width={98}
                      height={134}
                    />
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col">
                        <strong className="text-heading-sm font-bold">
                          Entendendo algoritmos
                        </strong>
                        <span className="text-sm text-gray-400">
                          Aditya Bhargava
                        </span>
                      </div>
                      <Rating rate={4} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque animi ipsum sit earum quaerat porro veniam
                    aliquid neque totam. Repellendus nisi voluptatibus quas
                    sapiente eaque dicta temporibus dolor cupiditate
                    accusantium?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-col items-center justify-center gap-8 border-l border-l-gray-700">
            <div className="flex w-full flex-col items-center gap-5 pb-2">
              <Avatar alt="" src={user?.avatar_url!} size="lg" />
              <div className="flex flex-col items-center">
                <p className="text-heading-md font-bold">{user?.name}</p>
                <span className="text-sm text-gray-400">
                  membro desde {year}
                </span>
              </div>
            </div>
            <div className="h-2 w-8 rounded-full bg-gradient-horizontal" />
            <div className="flex w-full flex-col gap-10 px-14 py-5">
              <div className="flex items-center gap-5">
                <BookOpen size={32} className="text-green-100" />
                <div className="flex flex-col">
                  <span className="text-heading-xs font-bold text-gray-200">
                    3853
                  </span>
                  <span className="text-sm text-gray-300">Páginas lidas</span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Books size={32} className="text-green-100" />
                <div className="flex flex-col">
                  <span className="text-heading-xs font-bold text-gray-200">
                    10
                  </span>
                  <span className="text-sm text-gray-300">
                    Livros avaliados
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <UserList size={32} className="text-green-100" />
                <div className="flex flex-col">
                  <span className="text-heading-xs font-bold text-gray-200">
                    8
                  </span>
                  <span className="text-sm text-gray-300">Autores lidos</span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <BookmarkSimple size={32} className="text-green-100" />
                <div className="flex flex-col">
                  <span className="text-heading-xs font-bold text-gray-200">
                    Computação
                  </span>
                  <span className="text-sm text-gray-300">
                    Categoria mais lida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout.Content>
    </Layout.Root>
  )
}
