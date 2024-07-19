import * as React from 'react';
import Link from './link';
import { StyledNextPrevious } from './styles/PageNavigationButtons';
import config from '../../config'; // Ensure the correct path to config

const sortNavItems = (nav, subNavOrder) => {
  // Helper function to sort items based on the order map
  const sortItems = (items, orderMap) => {
    return items.slice().sort((a, b) => {
      const aIndex = orderMap[a.url] !== undefined ? orderMap[a.url] : Infinity;
      const bIndex = orderMap[b.url] !== undefined ? orderMap[b.url] : Infinity;
      return aIndex - bIndex;
    });
  };

  // Create a map of subNavOrder
  const orderMap = Object.entries(subNavOrder).reduce((map, [parentSlug, subOrder]) => {
    subOrder.forEach((slug, index) => {
      map[`${parentSlug}/${slug}`] = index;
    });
    return map;
  }, {});

  // Sort nav items based on the order defined in subNavOrder
  const sortedNav = nav.slice().sort((a, b) => {
    const aIndex = orderMap[a.url] !== undefined ? orderMap[a.url] : Infinity;
    const bIndex = orderMap[b.url] !== undefined ? orderMap[b.url] : Infinity;
    return aIndex - bIndex;
  });

  return sortedNav;
};

const NextPrevious = ({ mdx, nav }) => {
  const sortedNav = sortNavItems(nav, config.sidebar.subNavOrder || []);

  const currentIndex = sortedNav.findIndex((el) => el && el.url === mdx.fields.slug);

  const nextInfo = {};
  const previousInfo = {};

  if (currentIndex === -1) {
    nextInfo.url = sortedNav[0]?.url || null;
    nextInfo.title = sortedNav[0]?.title || null;
  } else {
    previousInfo.url = currentIndex > 0 ? sortedNav[currentIndex - 1]?.url : null;
    previousInfo.title = currentIndex > 0 ? sortedNav[currentIndex - 1]?.title : null;
    nextInfo.url = currentIndex < sortedNav.length - 1 ? sortedNav[currentIndex + 1]?.url : null;
    nextInfo.title =
      currentIndex < sortedNav.length - 1 ? sortedNav[currentIndex + 1]?.title : null;
  }

  return (
    <StyledNextPrevious>
      {previousInfo.url && (
        <Link to={previousInfo.url} className={'previousBtn'}>
          <div className={'leftArrow'}>
            <ArrowLeft />
          </div>
          <div className={'preRightWrapper'}>
            <div className={'smallContent'}>
              <span>Previous</span>
            </div>
            <div className={'nextPreviousTitle'}>
              <span>{previousInfo.title}</span>
            </div>
          </div>
        </Link>
      )}
      {nextInfo.url && (
        <Link to={nextInfo.url} className={'nextBtn'}>
          <div className={'nextRightWrapper'}>
            <div className={'smallContent'}>
              <span>Next</span>
            </div>
            <div className={'nextPreviousTitle'}>
              <span>{nextInfo.title}</span>
            </div>
          </div>
          <div className={'rightArrow'}>
            <ArrowRight />
          </div>
        </Link>
      )}
    </StyledNextPrevious>
  );
};

// Reusable Arrow Components
const ArrowLeft = () => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
  >
    <g>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </g>
  </svg>
);

const ArrowRight = () => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
  >
    <g>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </g>
  </svg>
);

export default NextPrevious;
