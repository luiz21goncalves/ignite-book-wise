import { BookOpen, Books, UserList, BookmarkSimple } from '@/icons'

import { StatusItem } from './StatusItem'

export function Analytics() {
  return (
    <div className="w-full h-fit border-l-[1px] border-gray-700 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[72px] h-[72px] bg-gradient-vertical rounded-full" />

        <div className="flex flex-col items-center">
          <p className="text-heading-md font-bold">Cristofer Rosser</p>
          <span className="text-sm text-gray-400">membro desde 2019</span>
        </div>
      </div>

      <div className="w-8 h-1 rounded-full bg-gradient-horizontal" />

      <div className="py-5 px-14 flex flex-col gap-10">
        <StatusItem icon={BookOpen} title={3853} label="Páginas lidas" />
        <StatusItem icon={Books} title={10} label="Livros avaliados" />
        <StatusItem icon={UserList} title={8} label="Autores lidos" />
        <StatusItem
          icon={BookmarkSimple}
          title="Computação"
          label="Categoria mais lida"
        />
      </div>
    </div>
  )
}
