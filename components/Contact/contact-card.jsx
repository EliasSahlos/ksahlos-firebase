function ContactCard() {
    return (
        <div>
            <h1 className=" text-xl">Konstantinos Sahlos</h1>
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-sm p-1">k.sahlos@gmail.com</p>
                    <p className="text-sm p-1">+30 (0) 693 700 0041</p>
                </div>
                <div>
                    <p className="text-sm p-1">Eresos</p>
                    <p className="text-sm p-1">Lesvos, Greece</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
