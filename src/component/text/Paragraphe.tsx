import React, { ElementType } from 'react'

type Props = {
    tag: ElementType,
    className: string,
    children: string,
}
const Paragraphe = ({ tag, className, children }: Props) => {
    const Tag = tag
    return (
    <Tag className={className}>{children}</Tag>
  )
}

export default Paragraphe