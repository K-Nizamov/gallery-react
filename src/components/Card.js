
function Card({ setCurrentObject, imageUrl, title, id, x, y, rotation }) {

    const degree = `${rotation}deg`

    return (
        <>
            <div onClick={()=>setCurrentObject({id:id,title:title,imageUrl:imageUrl})} className='img-wrapper' style={{ transform: `rotate(${degree})`, position: 'absolute', top: x, left: y }} >
                <img className='main-img' src={imageUrl} alt="bmw" />
                <p>{title}</p>
            </div>
        </>
    );
}

export default Card;