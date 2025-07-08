import BannerSlider from '../components/BannerSlider/BannerSlider';
import PackageList from '../components/package/PackageList';

const samplePackages = [
  {
    title: '5-Day Kerala Nature Explore Tour',
    description: 'Munnar, Thekkady, Alleppey Houseboat, Fort Kochi and more.',
    image: '/assets/banner-images/kerala1.jpg'
  },
  {
    title: '5-Day Kerala Nature Explore Tour',
    description: 'Munnar, Thekkady, Alleppey Houseboat, Fort Kochi and more.',
    image: '/assets/banner-images/kerala1.jpg'
  },
  {
    title: '5-Day Kerala Nature Explore Tour',
    description: 'Munnar, Thekkady, Alleppey Houseboat, Fort Kochi and more.',
    image: '/assets/banner-images/kerala1.jpg'
  },
  {
    title: '5-Day Kerala Nature Explore Tour',
    description: 'Munnar, Thekkady, Alleppey Houseboat, Fort Kochi and more.',
    image: 'src\assets\images\Alappey Boat 2.jpg'
  },

];

const Packages = () => {
  return (
    <>
      <BannerSlider />
      <PackageList packages={samplePackages} />
    </>
  );
};

export default Packages;
