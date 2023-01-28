import Head from 'next/head';
import Layout from '@/components/layout/layout.component';
import Image from 'next/image';
import 'animate.css';

const LearnHTML = () => {
  return (
    <>
      <Head>
        <title>LTC | Learn HTML</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='animate__animated animate__fadeInUp mt-12'>
          <section className='max-w-prose mx-auto pb-12'>
            <section>
              <h1 className='text-4xl font-medium mb-2'>
                Learn <span className='html-logo-color'>&lt;</span>HTML
                <span className='html-logo-color'>&gt;</span>
              </h1>
              <p>
                HTML stands for hyper-text mark up language, and it&apos;s used
                to structure a web page with headings, paragraphs, and images.
                If you&apos;re wondering how you make your site look pretty that
                &apos;s <span className='css-logo-color font-medium'>CSS</span>,
                and if you&apos;re wondering how you make your page interactive
                that&apos;s
                <span className='js-logo-color font-medium'> js</span>.
              </p>
            </section>
            <section className='mt-10'>
              <h2 className='text-3xl font-medium mb-4'>Basic Tags</h2>
              <p className='mt-2'>
                Some tag basics, so every html requires a opening and closing
                element unless they&apos;re self closing, and the way you open a
                tag is like <span className='html-logo-color'>&lt;</span>p
                <span className='html-logo-color'>&gt;</span>, and to close a
                tag the triangle brackets use a forward slash like{' '}
                <span className='html-logo-color'>&lt;/</span>p
                <span className='html-logo-color'>&gt;</span>. What&apos;s a
                self closing tag? Well an example of a self closing tag would be
                the image element, because the image element does not require a
                closing tag, nor a slash.
              </p>
              <div className='mt-10'>
                <h3 className='text-xl mb-2'>Document type declaration: </h3>
                <p className='mb-4'>
                  The document type declaration is a tag that provides
                  information to the browser, and tells the browser which HTML
                  version you&apos;re using. For instance this tag tells the
                  browser you&apos;re using HTML5.
                </p>
                <Image
                  src='/img/doctype.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                />
              </div>
              <div className='mt-10'>
                <h3 className='text-xl mb-2'>HTML element:</h3>
                <p className='mb-4'>
                  The HTML element tells the browser everything between the
                  opening and closing html tag that this is an html document.
                </p>
                <Image
                  src='/img/html-element.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                />
              </div>
              <div className='mt-10'>
                <h3 className='text-xl mb-2'>Head element:</h3>
                <p className='mb-4'>
                  The head element provides extra information about the page to
                  the browser, but is not displayed on the web page. For
                  instance we have a title element inside the head element, so
                  the tab on your web page will display that title.
                </p>
                <Image
                  src='/img/head-element.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                />
              </div>
              <div className='mt-10'>
                <h3 className='text-xl mb-2'>Body element:</h3>
                <p className='mb-4'>
                  The body element is where all the content you want to be
                  displayed to the user to go. For instance you can have{' '}
                  <span className='html-logo-color'>&lt;</span>p
                  <span className='html-logo-color'>&gt;</span>,{' '}
                  <span className='html-logo-color'>&lt;</span>h1
                  <span className='html-logo-color'>&gt;</span>,{' '}
                  <span className='html-logo-color'>&lt;</span>input
                  <span className='html-logo-color'>&gt;</span> elements inside
                  the body etc.
                </p>
                <Image
                  src='/img/body-element.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                />
              </div>
              <div className='mt-10'>
                <h3 className='text-xl mb-2'>Page Structure:</h3>
                <p className='mb-4'>
                  So every webpage requires a{' '}
                  <strong className='font-bold'>doctype declaration</strong>,
                  <strong className='font-bold'> html</strong>,
                  <strong className='font-bold'> head</strong>, and{' '}
                  <strong className='font-bold'> body</strong> element for
                  displaying content to the user, so the basic page structure of
                  every web page will look something like.
                </p>
                <Image
                  src='/img/body-element.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                />
              </div>
              <div className='mt-10'>
                <h3 className='text-xl mb-2'>
                  Creating your first HTML document.
                </h3>
                <p className='mb-4'>
                  In order to create a html document you require a code editor,
                  and i recommend something like
                  <a
                    className='html-logo-color font-bold'
                    href='https://code.visualstudio.com/'
                  >
                    Visual Studio Code
                  </a>
                  , because it makes life simple and you can tweak it your
                  liking with packages.
                </p>
                <p className='mb-4'>
                  So, after you downloaded a code editor open it up, and let's
                  write your first html document. If you're using VS code click
                  <strong>File</strong>, and then new file which you want to
                  enter index for the name and
                  <strong className='html-logo-color font-bold'>
                    .html
                  </strong>{' '}
                  for the file extension, or create it with your terminal with
                  <strong className='html-logo-color font-bold'>
                    touch
                  </strong>{' '}
                  in your preferred directory.
                </p>
                <p className='mb-4'>
                  After you created that file use the boilerplate code from
                  earlier.
                </p>
                <Image
                  src='/img/body-element.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                  className='mt-10 mb-4'
                />
                <p className='mb-4'>
                  So, now i'm going to give you a list of elements which you can
                  play with, or read further about in
                  <a
                    href='https://www.w3schools.com/tags/default.asp'
                    className='html-logo-color font-bold'
                  >
                    W3 Schools
                  </a>
                  , or
                  <a
                    href='https://developer.mozilla.org/en-US/docs/Web/HTML/Reference'
                    className='html-logo-color font-bold'
                  >
                    MDN
                  </a>
                  .
                </p>
                <Image
                  src='/img/html-basic-tags.png'
                  alt='basic html tags'
                  width={1360}
                  height={380}
                  className='mb-4'
                />
                <p>
                  I'll be adding more too this tutorial, and expanding so stay
                  tuned. Thanks for reading 😊
                </p>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default LearnHTML;
