function IFrame({ children }) {
    const [ref, setRef] = useState();
    const container = ref?.contentWindow?.document?.body;
  
    return (
      <iframe ref={setRef}>
        {container && createPortal(children, container)}
      </iframe>
    );
  }