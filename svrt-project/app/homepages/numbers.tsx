import Image from "next/image";


export default function Numbers() {
    return (
        <div>
            <Image
                src='/numberbase.png'
                alt="Description of the image"
                layout="responsive"
                width={1920}
                height={1080}
            />


            <div
                style={{
                    fontFamily: "Inter",
                    position: "absolute",
                    top: "16%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontSize: "540%",
                    zIndex: 1,
                }}
            >
                <p>Invest.Advise.Accelerate</p>
            </div>
            <div style={{
                fontFamily: "Inter",
                display: "flex",
                gap: "14rem",
                position: "absolute",
                top: "50%",
                color: "white",
                left: "50%", 
                transform: "translateX(-50%)",
                fontSize: "344%",
                zIndex: 1,

            }}>
                <p> $300M</p>
                <p> $510M+</p>
                <p> 630+</p>
            </div>
            <div style={{
                fontFamily: "Inter",
                display: "flex",
                position: "absolute",
                top: "60%",
                color: "white",
                fontSize: "144%",
                zIndex: 1,

            }}>
                <p style={{paddingLeft: "43%", paddingRight: "62%", whiteSpace: "nowrap"}}>in AUM</p>
                <p style={{paddingRight: "35%", whiteSpace: "nowrap"}}>total portfolio valuation</p>
                <p style={{whiteSpace: "nowrap"}}>total property units</p>
            </div>
        </div>
    )
}