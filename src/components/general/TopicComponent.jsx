import React from "react";
import "./styles/topic-component.scss";

const TopicComponent = (props) => {
  const { firstTopic, secondTopic } = props;
  return (
    <section className="topic-component">
      <h4>
        <span>
          {firstTopic}
          <br />
          <span className="topic-hero-color">{secondTopic}</span>
        </span>
      </h4>
    </section>
  );
};

export default TopicComponent;
