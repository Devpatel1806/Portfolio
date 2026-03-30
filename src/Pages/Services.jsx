export const Services = () => {
    const data = [
        {
            title: "UI/UX design",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean commodo ligula eget.",
            color: "#6C63FF",
            icon: "🎨",
        },
        {
            title: "Web Development",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean commodo ligula eget.",
            color: "#F4C542",
            icon: "💻",
        },
        {
            title: "Photography",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean commodo ligula eget.",
            color: "#F87171",
            icon: "📷",
        },
    ];

    return (
        <section className="services" id="services">
             <h1>Services</h1>
            <div className="card-container">
                <div className="container">
                    {data.map((item, index) => (
                        <div
                            className="card"
                            key={index}
                            style={{ backgroundColor: item.color }}
                        >
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
};
