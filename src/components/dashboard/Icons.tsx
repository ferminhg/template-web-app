import Image from "next/image"

type SvgIconProps = {
    size: number
    src: string
    alt: string
}

export function SvgIcon(props: SvgIconProps) {
    return <Image src={props.src} 
                    alt={props.alt} 
                    width={props.size} 
                    height={props.size}/>
}

export function Lock() {
    return <SvgIcon size={16} src="/svg/lock.svg" alt="lock"/>
}

export function Unlock() {
    return <SvgIcon size={16} src="/svg/unlock.svg" alt="unlock"/>
}

export function Check() {
    return <SvgIcon size={20} src="/svg/check.svg" alt="check"/>
}

export function Error() {
    return <SvgIcon size={12} src="/svg/error.svg" alt="error"/>
}

export function Start() {
    return <SvgIcon size={16} src="/svg/star.svg" alt="error"/>
}

export function Watchers() {
    return <SvgIcon size={12} src="/svg/watchers.svg" alt="error"/>
}

export function Forks() {
    return <SvgIcon size={17} src="/svg/repo-forked.svg" alt="error"/>
}