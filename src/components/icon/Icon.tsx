// import Icons from './Icons'
// import iconSprite from './Icons'
// import styled from 'styled-components';
import iconSprite from './icon-sprites.svg'

type TypeIconSprites = {
    width?: string
    height?: string
    viewBox?: string
    iconId?: string 
}

export const Icon = (props: TypeIconSprites) => {
    return (
        <svg width={props.width || "52"} height={props.height || "50"} viewBox={props.viewBox || "0 0 52 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};
