import React from 'react'

type Props = {
    tag: string,
    className: string,
    children: string,
}
const Paragraphe = ({ tag, className, children }: Props) => {
    const Tag:any = tag
    return (
    <Tag className={className}>{children}</Tag>
  )
}

export default Paragraphe