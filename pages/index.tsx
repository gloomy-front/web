import { GetServerSideProps } from 'next';
const IndexPage = (): JSX.Element => {
  return (
    <></>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/community',
      permanent: false,
    },
  };
};