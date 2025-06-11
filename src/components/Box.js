const Box = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.boxColor,
        width: 50,
        height: 100,
      }}
    >
      {/* <button
        onClick={() => {
          props.boxColor = "yellow";
        }}
      >
        Change prop color
      </button> */}
    </div>
  );
};
export default Box;
