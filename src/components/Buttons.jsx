import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import * as actions from "../actions/actions";
import { getOtherArticles } from "../heplers/helpers";

const mapStateToProps = (state) => {
  const { articlesCount } = state.articles;
  return {
    articlesCount,
  };
};

const actionCreators = {
  fetchArticles: actions.fetchArticles,
};

class Buttons extends Component {
  render() {
    const { fetchArticles, articlesCount } = this.props;
    return (
      <Wrap>
        <StyledButton
          type="primary"
          onClick={getOtherArticles("start", fetchArticles, articlesCount)}
        >
          Start
        </StyledButton>
        <ButtonsWrap>
          <StyledButton
            type="primary"
            onClick={getOtherArticles("prev", fetchArticles, articlesCount)}
          >
            <ArrowLeftOutlined /> Left
          </StyledButton>
          <StyledButton
            type="primary"
            onClick={getOtherArticles("next", fetchArticles, articlesCount)}
          >
            Right <ArrowRightOutlined />
          </StyledButton>
        </ButtonsWrap>
        <StyledButton
          type="primary"
          onClick={getOtherArticles("end", fetchArticles, articlesCount)}
        >
          End
        </StyledButton>
      </Wrap>
    );
  }
}

const connectedButtons = connect(mapStateToProps, actionCreators)(Buttons);

export default connectedButtons;

const Wrap = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  padding: 30px 0;
`;

const ButtonsWrap = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 80px;
  height: 30px;
`;
