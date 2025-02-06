import iconSprite from '../../assets/img/icon-sprites.svg'


function dataURItoBlobUrl(dataURI: string) {
    const svg = decodeURI(dataURI).split(',')[1];
    const blob = new Blob([svg], { type: "image/svg+xml" });
  
    return URL.createObjectURL(blob);
  }
  
  const blobUrl = dataURItoBlobUrl(iconSprite)

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "52"} height={props.height || "50"} viewBox={props.viewBox || "0 0 52 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${blobUrl}#${props.iconId}`}/>
        </svg>
    );
};
