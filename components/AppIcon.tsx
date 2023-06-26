export default function AppIcon (
  { src, alt, color } :
  { src: string; alt: string, color: string } )
{
  return (
    <div className={`h-20 w-20 ${color} rounded-[1rem]`}/>
  )
}