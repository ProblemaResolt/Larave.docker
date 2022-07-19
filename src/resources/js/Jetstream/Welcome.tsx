import React from 'react';
import useTypedPage from '@/Hooks/useTypedPage';

export default function Welcome(props:any) {
    const page = useTypedPage();

  return (
    <article>
        <h2>プロフィール</h2>
        <p>
            <ul>
                <li>
                    <dl>
                        <dt>名前</dt>
                        <dd>{page.props.user.name}</dd>
                        <dt>img</dt>
                        <dd><img className='h-40 w-40 rounded-full object-cover' src={page.props.user.profile_photo_url} /></dd>
                    </dl>
                </li>
            </ul>
        </p>
    </article>
  );
}
