function Product() {
    const stu = [
        { id: 1, pname: "laptop", price: 50000, Image: "https://example.com/laptop.jpg" },
        { id: 2, pname: "mobile", price: 20000, Image: "https://example.com/mobile.jpg" },
        { id: 3, pname: "tablet", price: 30000, Image: "https://example.com/tablet.jpg" },
        { id: 4, pname: "smartwatch", price: 15000, Image: "https://example.com/smartwatch.jpg" },
        { id: 5, pname: "headphone", price: 3000, Image: "https://example.com/headphone.jpg" },
        { id: 6, pname: "keyboard", price: 10000, Image: "https://example.com/keyboard.jpg" },
        { id: 7, pname: "mouse", price: 5000, Image: "https://example.com/mouse.jpg" },
        { id: 8, pname: "monitor", price: 25000, Image: "https://example.com/monitor.jpg" },
        { id: 9, pname: "printer", price: 15000, Image: "https://example.com/printer.jpg" },
        { id: 10, pname: "scanner", price: 12000, Image: "https://example.com/scanner.jpg" }

    ]
    x
    return (
        <>
            {
                stu.map((stu) => {
                    return (
                        <div className="card" >
                            <img src={stu.Image} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{stu.pname}</h5>

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{stu.id}</li>
                                    <li className="list-group-item">{stu.price}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}
    export {Product}