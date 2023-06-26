interface Props extends React.HTMLAttributes<HTMLDivElement>, React.DOMAttributes<HTMLDivElement> {
  innerref?: any
}

const TextWrapper = (props: Props) => {
  return (
    <div ref={props.innerref} {...props} className={`text-dark dark:text-light text-base ${props.className}`}>
      {props.children}
    </div>
  )
}

export default TextWrapper
