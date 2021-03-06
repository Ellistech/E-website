export default function BlogPost() {
    return (
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Blog Post</li>
                    </ol>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <article class="entry single">
                            <div class="entry-media">
                                <div class="entry-slider owl-carousel owl-theme">
                                    <img src="assets/images/blog/post-1.jpg" alt="Post" />
                                    <img src="assets/images/blog/post-2.jpg" alt="Post" />
                                    <img src="assets/images/blog/post-3.jpg" alt="Post" />
                                </div>
                            </div>

                            <div class="entry-body">
                                <div class="entry-date">
                                    <span class="day">22</span>
                                    <span class="month">Jun</span>
                                </div>

                                <h2 class="entry-title">
                                    Post Format - Image Gallery
                                </h2>

                                <div class="entry-meta">
                                    <span><i class="icon-calendar"></i>June 22, 2018</span>
                                    <span><i class="icon-user"></i>By <a href="#">Admin</a></span>
                                    <span><i class="icon-folder-open"></i>
                                        <a href="#">Haircuts & hairstyles</a>,
                                        <a href="#">Fashion trends</a>,
                                        <a href="#">Accessories</a>
                                    </span>
                                </div>

                                <div class="entry-content">
                                    <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula.</p>
                                    <p>Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula.
                                        Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. Nulla aliquet turpis eget sodales scelerisque. Ut accumsan rhoncus sapien a dignissim. Sed vel ipsum nunc. Aliquam erat volutpat. Donec et dignissim elit. Etiam condimentum, ante sed rutrum auctor, quam arcu consequat massa, at gravida enim velit id nisl.</p>
                                    <p>Nullam non felis odio. Praesent aliquam magna est, nec volutpat quam aliquet non. Cras ut lobortis massa, a fringilla dolor. Quisque ornare est at felis consectetur mollis. Aliquam vitae metus et enim posuere ornare. Praesent sapien erat, pellentesque quis sollicitudin eget, imperdiet bibendum magna. Aenean sit amet odio est.</p>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris quis est lobortis odio dignissim rutrum. Pellentesque blandit lacinia diam, a tincidunt felis tempus eget.</p>
                                    <p>Donec egestas metus non vehicula accumsan. Pellentesque sit amet tempor nibh. Mauris in risus lorem. Cras malesuada gravida massa eget viverra. Suspendisse vitae dolor erat. Morbi id rhoncus enim. In hac habitasse platea dictumst. Aenean lorem diam, venenatis nec venenatis id, adipiscing ac massa. Nam vel dui eget justo dictum pretium a rhoncus ipsum. Donec venenatis erat tincidunt nunc suscipit, sit amet bibendum lacus posuere. Sed scelerisque, dolor a pharetra sodales, mi augue consequat sapien, et interdum tellus leo et nunc. Nunc imperdiet eu libero ut imperdiet.</p>
                                    <p>Nunc varius ornare tortor. In dignissim quam eget quam sodales egestas. Nullam imperdiet velit feugiat, egestas risus nec, rhoncus felis. Suspendisse sagittis enim aliquet augue consequat facilisis. Nunc sit amet eleifend tellus. Etiam rhoncus turpis quam. Vestibulum eu lacus mattis, dignissim justo vel, fermentum nulla. Donec pharetra augue eget diam dictum, eu ullamcorper arcu feugiat.</p>
                                    <p>Proin ut ante vitae magna cursus porta. Aenean rutrum faucibus augue eu convallis. Phasellus condimentum elit id cursus sodales. Vivamus nec est consectetur, tincidunt augue at, tempor libero.</p>
                                </div>

                                <div class="entry-share">
                                    <h3>
                                        <i class="icon-forward"></i>
                                        Share this post
                                    </h3>

                                    <div class="social-icons">
                                        <a href="#" class="social-icon social-facebook" target="_blank" title="Facebook">
                                            <i class="icon-facebook"></i>
                                        </a>
                                        <a href="#" class="social-icon social-twitter" target="_blank" title="Twitter">
                                            <i class="icon-twitter"></i>
                                        </a>
                                        <a href="#" class="social-icon social-linkedin" target="_blank" title="Linkedin">
                                            <i class="icon-linkedin"></i>
                                        </a>
                                        <a href="#" class="social-icon social-gplus" target="_blank" title="Google +">
                                            <i class="icon-gplus"></i>
                                        </a>
                                        <a href="#" class="social-icon social-mail" target="_blank" title="Email">
                                            <i class="icon-mail-alt"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="entry-author">
                                    <h3><i class="icon-user"></i>Author</h3>

                                    <figure>
                                        <a href="#">
                                            <img src="assets/images/blog/author.jpg" alt="author" />
                                        </a>
                                    </figure>

                                    <div class="author-content">
                                        <h4><a href="#">John Doe</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia culpa corporis, quidem placeat minima unde vel veniam laboriosam et animi, inventore delectus, officiis doloribus ex amet illum ea suscipit!</p>
                                    </div>
                                </div>

                                <div class="comment-respond">
                                    <h3>Leave a Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>

                                    <form action="#">
                                        <div class="form-group required-field">
                                            <label>Comment</label>
                                            <textarea cols="30" rows="1" class="form-control" required></textarea>
                                        </div>

                                        <div class="form-group required-field">
                                            <label>Name</label>
                                            <input type="text" class="form-control" required />
                                        </div>

                                        <div class="form-group required-field">
                                            <label>Email</label>
                                            <input type="email" class="form-control" required />
                                        </div>

                                        <div class="form-group">
                                            <label>Website</label>
                                            <input type="url" class="form-control" />
                                        </div>

                                        <div class="form-group-custom-control mb-3">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="save-name" />
                                                <label class="custom-control-label" for="save-name">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div>
                                        </div>

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-primary">Post Comment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>

                        <div class="related-posts">
                            <h4 class="light-title">Related <strong>Posts</strong></h4>

                            <div class="owl-carousel owl-theme related-posts-carousel">
                                <article class="entry">
                                    <div class="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/blog/related/post-1.jpg" alt="Post" />
                                        </a>
                                    </div>

                                    <div class="entry-body">
                                        <div class="entry-date">
                                            <span class="day">29</span>
                                            <span class="month">Jun</span>
                                        </div>

                                        <h2 class="entry-title">
                                            <a href="single.html">Post Format - Image</a>
                                        </h2>

                                        <div class="entry-content">
                                            <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incep tos himens.</p>

                                            <a href="single.html" class="read-more">Read More <i class="icon-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </article>

                                <article class="entry">
                                    <div class="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/blog/related/post-2.jpg" alt="Post" />
                                        </a>
                                    </div>
                                    <div class="entry-body">
                                        <div class="entry-date">
                                            <span class="day">23</span>
                                            <span class="month">Mar</span>
                                        </div>

                                        <h2 class="entry-title">
                                            <a href="single.html">Post Format - Image</a>
                                        </h2>

                                        <div class="entry-content">
                                            <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incep tos himens.</p>

                                            <a href="single.html" class="read-more">Read More <i class="icon-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </article>

                                <article class="entry">
                                    <div class="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/blog/related/post-3.jpg" alt="Post" />
                                        </a>
                                    </div>
                                    <div class="entry-body">
                                        <div class="entry-date">
                                            <span class="day">14</span>
                                            <span class="month">May</span>
                                        </div>

                                        <h2 class="entry-title">
                                            <a href="single.html">Post Format - Image</a>
                                        </h2>

                                        <div class="entry-content">
                                            <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incep tos himens.</p>

                                            <a href="single.html" class="read-more">Read More <i class="icon-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </article>

                                <article class="entry">
                                    <div class="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/blog/related/post-1.jpg" alt="Post" />
                                        </a>
                                    </div>

                                    <div class="entry-body">
                                        <div class="entry-date">
                                            <span class="day">11</span>
                                            <span class="month">Apr</span>
                                        </div>

                                        <h2 class="entry-title">
                                            <a href="single.html">Post Format - Image</a>
                                        </h2>

                                        <div class="entry-content">
                                            <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incep tos himens.</p>

                                            <a href="single.html" class="read-more">Read More <i class="icon-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                    <aside class="sidebar col-lg-3">
                        <div class="sidebar-wrapper">
                            <div class="widget widget-search">
                                <form role="search" method="get" class="search-form" action="#">
                                    <input type="search" class="form-control" placeholder="Search posts here..." name="s" required />
                                    <button type="submit" class="search-submit" title="Search">
                                        <i class="icon-search"></i>
                                        <span class="sr-only">Search</span>
                                    </button>
                                </form>
                            </div>

                            <div class="widget widget-categories">
                                <h4 class="widget-title">Blog Categories</h4>

                                <ul class="list">
                                    <li><a href="#">All about clothing</a></li>
                                    <li><a href="#">Make-up &amp; beauty</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Fashion trends</a></li>
                                    <li><a href="#">Haircuts &amp; hairstyles</a></li>
                                </ul>
                            </div>

                            <div class="widget">
                                <h4 class="widget-title">Recent Posts</h4>

                                <ul class="simple-entry-list">
                                    <li>
                                        <div class="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/widget/post-1.jpg" alt="Post" />
                                            </a>
                                        </div>
                                        <div class="entry-info">
                                            <a href="single.html">Post Format - Video</a>
                                            <div class="entry-meta">
                                                April 08, 2018
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/widget/post-2.jpg" alt="Post" />
                                            </a>
                                        </div>
                                        <div class="entry-info">
                                            <a href="single.html">Post Format - Image</a>
                                            <div class="entry-meta">
                                                March 23, 2016
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="widget">
                                <h4 class="widget-title">Tagcloud</h4>

                                <div class="tagcloud">
                                    <a href="#">Fashion</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Skirts</a>
                                    <a href="#">Dresses</a>
                                    <a href="#">Bag</a>
                                </div>
                            </div>

                            <div class="widget">
                                <h4 class="widget-title">Archive</h4>

                                <ul class="list">
                                    <li><a href="#">April 2018</a></li>
                                    <li><a href="#">March 2018</a></li>
                                    <li><a href="#">February 2018</a></li>
                                </ul>
                            </div>


                            <div class="widget widget_compare">
                                <h4 class="widget-title">Compare Products</h4>

                                <p>You have no items to compare.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <div class="mb-6"></div>
        </main>
    )
}