import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowig: true },
    { userName: 'facebook', name: 'Facebook', isFollowig: false },
    { userName: 'WhatsApp', name: 'WhatsApp', isFollowig: false },
];

export function App () {

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowig }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowig}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}