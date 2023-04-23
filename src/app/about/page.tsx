import Hero from '@/components/Hero';

export const metadata = {
  title: '소개',
  description: '준수를 소개합니다.',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 프론트엔드 개발자 <br />
          유저친화적인 어플리케이션을 만드는 것이 저의 일입니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          비드코칭연구소 (-Now) <br />
          한밭대학교 (-2019) <br />
          지족고등학교 (-2013)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          Node.js, React, Next.js, PHP, MYSQL
          <br />
          SVN, Git
          <br />
          VS Code
        </p>
      </section>
    </>
  );
}
