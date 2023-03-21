type Props = {
    text: string;
}

function Button({ text }: Props) {
  return (
    <button className='btn btn-hero'>{ text }</button>
  )
}

export default Button