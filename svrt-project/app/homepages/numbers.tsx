import Image from "next/image";
import Styles from './numbers.module.css'

export default function Numbers() {
    return (
        <div className={Styles['background']}>


            <p className={Styles['big-text']}>Invest.Advise.Accelerate</p>

            <div className={Styles['three-blocks']}>
                <div className={Styles['block']}>
                    <p className={Styles['aum']}> $400M</p>
                    <p className={Styles['words']} >in AUM</p>
                </div>
                <div className={Styles['block']}>
                    <p className={Styles['aum']}> $50M+</p>
                    <p className={Styles['words']}>total portfolio valuation</p>
                </div>
                <div className={Styles['block']}>
                    <p className={Styles['aum']}> 20+</p>
                    <p className={Styles['words']}>industry partners</p>
                </div>
            </div>
           
        </div>
    )
}
