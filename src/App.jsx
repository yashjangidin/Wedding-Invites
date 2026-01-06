import GlobalBackground from './components/GlobalBackground';
import HeroSection from './sections/HeroSection';
import LanternTransition from './components/LanternTransition';
import InvitationSection from './sections/InvitationSection';
import EventsSection from './sections/EventsSection';
import StorySection from './sections/StorySection';
import CarSection from './sections/CarSection';
import MapSection from './sections/MapSection';
import RsvpSection from './sections/RsvpSection';
import InfoSection from './sections/InfoSection';

function App() {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Global Background with scroll-based color transitions */}
            <GlobalBackground />

            {/* Main content */}
            <main className="relative z-0">
                <HeroSection />

                {/* Lantern Transition Effect */}
                <LanternTransition />

                <InvitationSection />
                <EventsSection />
                <StorySection />
                <CarSection />
                <MapSection />
                <RsvpSection />
                <InfoSection />
            </main>
        </div>
    );
}

export default App;
