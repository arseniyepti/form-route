import {
  CalendarTwoTone,
  CopyrightCircleTwoTone,
  QuestionCircleTwoTone,
  HeartTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../actions/actions";
import {
  convertDate,
  setAccess,
  openNotification,
  showConfirm,
} from "../heplers/helpers";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = (state) => {
  const { articlesFavouriteFetchingState } = state;
  return {
    articlesFavouriteFetchingState,
  };
};

const actionCreators = {
  fetchFavouriteArticle: actions.fetchFavouriteArticle,
  fetchDeleteArticles: actions.fetchDeleteArticles,
  fetchArticles: actions.fetchArticles,
  authModalStateFailure: actions.authModalStateFailure,
  fetchFavouriteArticleSuccess: actions.fetchFavouriteArticleSuccess,
};

class Article extends Component {
  setFavouriteArticle = async () => {
    const {
      fetchFavouriteArticle,
      fetchFavouriteArticleSuccess,
      article: { slug, favorited },
    } = this.props;
    fetchFavouriteArticleSuccess({ slug });
    await fetchFavouriteArticle(slug, favorited);
    const { articlesFavouriteFetchingState } = this.props;
    if (articlesFavouriteFetchingState === "failed") {
      openNotification();
      fetchFavouriteArticleSuccess({ slug });
    }
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

    const {
      history,
      location,
      authModalStateFailure,
      fetchDeleteArticles,
      fetchArticles,
    } = this.props;
    const tags = tagList.join(", ");
    const name = localStorage.getItem("username");
    return (
      <Wrap>
        <TitleWrap>
          <Title to={`/form-route/articles/${slug}`}>{title}</Title>
          <EditWrap>
            <StyledDeleteTwoTone
              username={username}
              name={name}
              onClick={showConfirm(slug, fetchDeleteArticles, fetchArticles)}
            />
            <EditButton
              username={username}
              name={name}
              type="primary"
              onClick={setAccess(name, authModalStateFailure, history, slug)}
              props={this.props}
            >
              Edit
            </EditButton>
          </EditWrap>
        </TitleWrap>
        <Description location={location}>{description}</Description>
        <Paragraph location={location}>{body}</Paragraph>
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
            <HeartIcon
              onClick={this.setFavouriteArticle}
              twoToneColor={favorited ? "#eb2f96" : ""}
            />{" "}
            {favoritesCount}
          </Likes>
        </Info>
      </Wrap>
    );
  }
}

const ConnectedAuthorization = connect(
  mapStateToProps,
  actionCreators
)(Article);

export default withRouter(ConnectedAuthorization);

const Wrap = styled.article`
  width: 700px;
  padding-top: 10px;
  border-bottom: 2px solid #aeb8c2;
  background: rgba(175, 217, 255, 0.44);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  border: 1px solid cornflowerblue;
  background: rgba(88, 154, 255, 0.45);
`;

const EditWrap = styled.div`
  display: flex;
  padding-right: 20px;
  justify-content: space-between;
  width: 180px;
`;

const Title = styled(Link)`
  color: rgba(5, 12, 22, 0.7);
  font-weight: 600;
  width: 530px;
  padding: 5px 20px;
  margin: 0;
  word-wrap: break-word;
`;

const Description = styled.div`
  display: ${({ location }) => {
    return location.pathname === "/form-route/" ? "none" : "block";
  }};
  color: rgba(5, 12, 22, 0.5);
  width: 650px;
  padding: 5px 20px;
  margin: 0;
  word-wrap: break-word;
`;

const Paragraph = styled.p`
  display: ${({ location }) => {
    return location.pathname === "/form-route/" ? "none" : "block";
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
  width: 40px;
  height: 30px;
`;

const HeartIcon = styled(HeartTwoTone)`
  font-size: 18px;

  &:hover {
    animation: transform 0.3s ease;
  }

  @keyframes transform {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
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
  display: ${({ name, username }) => (name === username ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 50px;
  font-size: 20px;
`;

const EditButton = styled(Button)`
  display: ${({ name, username }) => (name === username ? "block" : "none")};
  width: 100px;
  height: 30px;
  margin-right: 5px;
  background-color: ${({ name, username }) =>
    name === username ? "#1890ff" : "inherit"};
`;
