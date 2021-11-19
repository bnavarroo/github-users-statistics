import {
  Wrapper,
  FollowArea,
  InfoArea,
  InfoWithIcon,
  BioText,
  Link,
  CompanyIcon,
  LocationIcon,
  LinkIcon,
} from './styles';

type BioProps = {
  company?: string;
  blog?: string;
  location?: string;
  bio?: string;
  followers: number | null;
  following: number | null;
};

const Bio: React.FC<BioProps> = ({
  company,
  blog,
  location,
  bio,
  followers,
  following,
}) => (
  <Wrapper as="section">
    <FollowArea>
      <div>
        <b>Seguidores:</b> {followers}
      </div>
      <div>
        <b>Seguindo:</b> {following}
      </div>
    </FollowArea>
    <InfoArea>
      {company && (
        <InfoWithIcon>
          <CompanyIcon />
          <span>{company}</span>
        </InfoWithIcon>
      )}
      {blog && (
        <InfoWithIcon>
          <LinkIcon />
          <Link href={blog} target="_blank">
            {blog}
          </Link>
        </InfoWithIcon>
      )}
      {location && (
        <InfoWithIcon>
          <LocationIcon />
          <span>{location}</span>
        </InfoWithIcon>
      )}
    </InfoArea>
    <BioText>{bio ?? 'Esse usuário não possui resumo.'}</BioText>
  </Wrapper>
);

export default Bio;
