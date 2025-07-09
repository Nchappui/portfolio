import "./StackNavigation.css";

const StackNavigation = ({ stacks, activeStack, onStackChange }) => {
  return (
    <div className="stack-navigation">
      <div className="stack-tabs">
        {" "}
        {/* Conteneur */}
        {stacks.map((stack) => (
          <div
            key={stack.key}
            onClick={() => onStackChange(stack.key)}
            className={`stack-tab ${activeStack === stack.key ? "active" : ""}`}
          >
            {stack.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackNavigation;
