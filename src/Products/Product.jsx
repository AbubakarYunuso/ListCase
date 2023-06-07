import style from './Product.module.css'

const Product=(props)=>{
    return(
        <tr className={style.tr} >
            <td className={style.td}>{props.name}</td>
            <td className={style.td}>{props.price}</td>
            <td className={style.td}>{props.left}</td>
            <td className={style.td}>
                <img className={style.image} src={props.image} alt="" />
            </td>
        </tr>
    )
}

export default Product