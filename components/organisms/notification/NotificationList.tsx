import NotificationItem from './NotificationItem';

const NotificationList = () => {
  return (
    <div style={{ width: '100%' }}>
      {FAKE_DATAS.map((data) => (
        <NotificationItem notification={data} />
      ))}
    </div>
  );
};

const FAKE_DATAS = [
  {
    pk: 0,
    title: '별로 그렇게 안춥네',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    count: 5,
    createdAt: '2022-01-20 20:32',
    type: 'like',
  },
  {
    pk: 1,
    title: '힘내',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    count: 2,
    createdAt: '2022-01-20 19:32',
    type: 'comment',
  },
  {
    pk: 2,
    title: '별로 그렇게 안춥네',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다 평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    count: 5,
    createdAt: '2022-01-19 04:32',
    type: 'like',
  },
  {
    pk: 3,
    title: '힘내',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    count: 2,
    createdAt: '2022-01-19 04:32',
    type: 'comment',
  },
  {
    pk: 4,
    title: '별로 그렇게 안춥네',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    count: 5,
    createdAt: '2022-01-19 04:32',
    type: 'like',
  },
  {
    pk: 5,
    title: '별로 그렇게 안춥네',
    content:
      '아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다 휴 역시 달달한게 우울에는 직빵인듯 힘내자 내자신아 너네들도 힘내라',
    count: 2,
    createdAt: '2021-12-19 04:32',
    type: 'nestedComment',
  },
  {
    pk: 6,
    title: '별로 그렇게 안춥네',
    content:
      '아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다 휴 역시 달달한게 우울에는 직빵인듯 힘내자 내자신아 너네들도 힘내라',
    count: 10,
    createdAt: '2021-12-19 04:32',
    type: 'like',
  },
  {
    pk: 7,
    title:
      '아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다 ',
    content:
      '아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다 휴 역시 달달한게 우울에는 직빵인듯 힘내자 내자신아 너네들도 힘내라',
    count: 100,
    createdAt: '2022-01-19 04:32',
    type: 'nestedComment',
  },
];
export default NotificationList;
