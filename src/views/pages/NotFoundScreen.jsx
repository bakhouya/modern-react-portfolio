import { Link } from "react-router-dom";

export default function NotFoundScreen() {
    return (
        <section  className="notfoundpage flex_center_center">
            <div className="" style={{textAlign: "center" }}>
                <h1 className="text text-5xl">404</h1>
                <p>  Page not found </p>
                <Link to="/"> Go to home</Link>
            </div>
        </section>
    );
};


