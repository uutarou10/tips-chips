import React, { FC } from 'react'
import Link from 'next/link'

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="mr-2 py-2 text-base underline last:mr-0">{children}</li>
}

const Header: FC<JSX.IntrinsicElements['div']> = props => {
  return (
    <div {...props} className={`flex flex-col gap-2 ${props.className || ''}`}>
      <header>
        <h1 className="text-3xl font-extrabold">tips chips</h1>
        <p className="text-sm">
          日々の作業で出てきた技術メモの切れ端を置いておくページ
        </p>
      </header>
      <nav>
        <ul className="flex flex-row">
          <ListItem>
            <Link href={'/'}>記事一覧</Link>
          </ListItem>
          <ListItem>
            <Link href={'/about'}>このサイトについて</Link>
          </ListItem>
        </ul>
      </nav>
    </div>
  )
}

export default Header
