import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Sidebar from './menu/Sidebar';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className="Layout" id="outer-container">
<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
</div>

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
