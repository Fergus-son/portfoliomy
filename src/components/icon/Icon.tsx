// import Icons from './Icons'
// import iconSprite from './Icons'
import iconSprite from './icon-sprites.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (

        <svg width={props.width || "52"} height={props.height || "50"} viewBox={props.viewBox || "0 0 52 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};
