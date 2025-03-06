import "../styles/Chainlit.css";
import "../App.css";

const Chainlit = () => {
  return (
    <div class="content">
      <div class="chat">
        <iframe
          title="Chainlit UI"
          src="https://chat.indigo-pdx.com/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Chainlit;
