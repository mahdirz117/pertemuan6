import Card from "../../Card";

const Contact = () => {
    const posts = [
        {
            id: 1, title: "Email", description: "0000001@mhs.stiki.ac.id"
        },
        { id: 2, title: "Phone", description: "628819336933" },
        {
            id: 3,
            title: "Address",
            description:
                "Jl. Raya Tidar No.100, Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur 65146",
        },
    ];

    return (
        <div>
            {posts.map((post) => (
                <Card key={post.id} title={post.title}
                    description={post.description} />
            ))}
        </div>
    );
};

export default Contact;