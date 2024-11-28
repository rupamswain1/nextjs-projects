import Link from "next/link";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#282c34",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1>Welcome to My News Website</h1>
      <p style={{ marginTop: "10px", fontSize: "18px", lineHeight: "1.6" }}>
        Stay informed with the latest and most reliable news from around the
        world. Our platform is your one-stop destination for breaking news,
        in-depth analysis, and trending stories that matter.
      </p>
      <Link href="/news">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to News
        </button>
      </Link>
    </div>
  );
};

export default HomePage;