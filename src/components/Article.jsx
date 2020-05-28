import {
  CalendarTwoTone,
  CopyrightCircleTwoTone,
  LikeTwoTone,
  QuestionCircleTwoTone,
  HeartTwoTone,
  DeleteTwoTone,
  StopTwoTone,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../actions/actions";
import { convertDate, setAccessToEdit } from "../heplers/helpers";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const actionCreators = {
  fetchFavouriteArticle: actions.fetchFavouriteArticle,
  fetchDeleteArticles: actions.fetchDeleteArticles,
  fetchArticles: actions.fetchArticles,
  authModalStateFailure: actions.authModalStateFailure,
};

class Article extends Component {
  setFavouriteArticle = () => {
    const {
      fetchFavouriteArticle,
      article: { slug, favorited },
    } = this.props;
    fetchFavouriteArticle(slug, favorited);
  };

  deleteArticle = (slug) => async () => {
    const { fetchDeleteArticles, fetchArticles } = this.props;
    await fetchDeleteArticles(slug);
    await fetchArticles();
  };

  render() {
    const {
      author: { username },
      favoritesCount,
      favorited,
      description,
      createdAt,
      slug,
      tagList,
      title,
      body,
    } = this.props.article;
    const { history, authModalStateFailure } = this.props;
    const tags = tagList.join(", ");
    const name = localStorage.getItem("username");
    const nameUI = localStorage.getItem("name");
    const iconColor = favorited ? "#eb2f96" : null;
    return (
      <Wrap>
        <TitleWrap>
          <Title to={`/form-route/articles/${slug}`}>{title}</Title>
          <StyledStopTwoTone username={username} name={name} />
          <StyledDeleteTwoTone onClick={this.deleteArticle(slug)} />
          <EditButton
            username={username}
            name={name}
            type="primary"
            onClick={setAccessToEdit(
              nameUI,
              username,
              name,
              authModalStateFailure,
              history,
              slug
            )}
            props={this.props}
          >
            Edit
          </EditButton>
        </TitleWrap>
        <Description>{description}</Description>
        <Paragraph>{body}</Paragraph>
        <Info>
          <Author>
            <CopyrightIcon />
            {username}
          </Author>
          <Date>
            <CalendarIcon />
            {convertDate(createdAt)}
          </Date>
          <Tags>
            <TagsIcon />
            {tags}
          </Tags>
          <Likes>
            <HeartIcon twoToneColor="rgba(12,57,114,0.85)" /> {favoritesCount}{" "}
            <LikeIcon
              twoToneColor={iconColor}
              onClick={this.setFavouriteArticle}
            />
          </Likes>
        </Info>
      </Wrap>
    );
  }
}

const ConnectedAuthorization = connect(null, actionCreators)(Article);

export default withRouter(ConnectedAuthorization);

const Wrap = styled.article`
  width: 700px;
  padding-top: 10px;
  border-bottom: 2px solid #aeb8c2;
  background: rgba(175, 217, 255, 0.44);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const TitleWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 700px;
  border: 1px solid cornflowerblue;
  background: rgba(88, 154, 255, 0.45);
`;

const Title = styled(Link)`
  color: rgba(5, 12, 22, 0.7);
  font-weight: 600;
  width: 650px;
  padding: 5px 20px;
  margin: 0;
  word-wrap: break-word;
`;

const Description = styled(Link)`
  display: ${() => {
    return window.location.pathname === "/form-route" ? "none" : "block";
  }};
  color: rgba(5, 12, 22, 0.5);
  width: 650px;
  padding: 5px 20px;
  margin: 0;
  word-wrap: break-word;
`;

const Paragraph = styled.p`
  display: ${() => {
    return window.location.pathname === "/form-route" ? "none" : "block";
  }};
  width: 700px;
  padding: 20px 20px;
  margin: 0;
  word-wrap: break-word;
  background: rgba(230, 243, 251, 0.72);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  padding: 5px 10px;
  background: rgba(88, 154, 255, 0.1);
`;

const CopyrightIcon = styled(CopyrightCircleTwoTone)`
  font-size: 18px;
  margin-right: 5px;
`;

const Likes = styled.span`
  width: 70px;
  height: 30px;
`;

const HeartIcon = styled(HeartTwoTone)`
  font-size: 18px;
`;

const LikeIcon = styled(LikeTwoTone)`
  font-size: 18px;
  width: 26px;
  height: 26px;
  margin-left: 5px;

  &:hover {
    font-size: 20px;
    cursor: pointer;
  }
`;

const CalendarIcon = styled(CalendarTwoTone)`
  font-size: 18px;
  margin-right: 5px;
`;

const TagsIcon = styled(QuestionCircleTwoTone)`
  font-size: 18px;
  margin-right: 5px;
`;

const Author = styled.span`
  display: block;
  width: 200px;
  word-wrap: break-word;
`;

const Date = styled.span`
  display: block;
  width: 200px;
  word-wrap: break-word;
`;

const Tags = styled.span`
  display: block;
  width: 200px;
  word-wrap: break-word;
`;

const StyledDeleteTwoTone = styled(DeleteTwoTone)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 50px;
  font-size: 20px;
`;

const StyledStopTwoTone = styled(StopTwoTone)`
  position: absolute;
  display: ${({ name, username }) => (name === username ? "none" : "block")};
  height: 30px;
  width: 50px;
  font-size: 28px;
  right: 92px;
  opacity: 0.4;
  top: calc(50% - 14px);
`;

const EditButton = styled(Button)`
  width: 100px;
  height: 30px;
  margin-right: 5px;
  background-color: ${({ name, username }) =>
    name === username ? "#1890ff" : "inherit"};
`;
