import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';
import { fetchRemovePost } from '../../redux/slices/post';
import { Container } from '@mui/material';

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
  first
}) => {
  const dispatch = useDispatch()
  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {
    if (window.confirm('Вы правда хотите удалить?')) {
      dispatch(fetchRemovePost(_id))
    }
  };

  const utcDate = new Date(createdAt)
  const options = { month: 'long', day: 'numeric' };
  const localDate = utcDate.toLocaleDateString('ru-RU', options);

  return (
    // <Container maxWidth={false}>
    <>
      {isFullPost ? (

        <div className={clsx(styles.root, { [styles.rootFull]: isFullPost }, first ? styles.firts_post : '')
        } >
          {isEditable && (
            <div className={styles.editButtons}>
              <Link to={`/posts/${_id}/edit`}>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton onClick={onClickRemove} color="secondary">
                <DeleteIcon />
              </IconButton>
            </div>
          )}
          {
            imageUrl && (
              <img
                className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                style={{ maxWidth: '40%' }}
                // src={imageUrl}
                src='images/blog5-387x320.jpg'
                alt={title}
              />

            )
          }

          <div className={styles.wrapper}>
            {/* <UserInfo {...user} additionalText={createdAt} /> */}
            <div className={styles.indention}>
              <span>{localDate}</span>
              <h3 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
                {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
              </h3>
              <ul className={styles.tags}>

                {tags.map((name) => (

                  <li key={name}>
                    <Link to={`/tag/${name.length ? name : 'Другие'}`}>{name.length ? name : 'Другие'}</Link>
                  </li>
                ))}
              </ul>
              {children && <div className={styles.content}>{children}</div>}
              <ul className={styles.postDetails}>
                <li>
                  <EyeIcon />
                  <span>{viewsCount}</span>
                </li>
                {/* <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li> */}
              </ul>
            </div>
          </div>
        </div >
      ) : (
        <div className="col-md-12">
          <div className="vs-blog blog-style1">
            <div className="blog-img">
              <a><img loading="lazy" decoding="async" width={387} height={320} src="images/blog4-387x320.jpg" className="w-100 wp-post-image" alt="" /></a>
              <div className="blog-content">
                <div className="blog-meta">
                  <a><i className="far fa-calendar" /><time dateTime="2022-08-10T06:09:28+02:00">{createdAt}</time></a>
                  {/* <a><i className="fal fa-user" />{user}</a> */}
                </div>
                <h3 className="blog-title">
                  <Link to={`/posts/${_id}`}>{title}</Link>
                </h3>
                <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                <a className="link-btn">Открыть<i className="far fa-arrow-right" /></a>
                {isEditable && (
                  <div>
                    <Link to={`/posts/${_id}/edit`}>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton onClick={onClickRemove} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

    // )}
    // </Container>
  );
};
