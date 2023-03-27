type Props = {
    text: string;
    onClick?: () => any;
}

function Button({ text, onClick }: Props) {
  return (
    <button className='btn btn-hero' onClick={onClick}>{ text }</button>
  )
}

export default Button