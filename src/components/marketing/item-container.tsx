type Props = {
  children: React.ReactNode
}

export const ItemContainer = ({ children }: Props) => {
  return (
    <section className=' min-h-[300px] bg-slate-200 p-10 rounded-xl grid lg:grid-cols-2 gap-y-10'>
      {children}
    </section>
  )
}
