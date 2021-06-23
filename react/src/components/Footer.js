import React, { Component } from 'react';

/**
 * Renders the Footer
 */
class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            2021 &copy; Nemea LLC. All Rights Reserved. Crafted with <i className='uil uil-heart text-danger font-size-12'></i> by
                            <a href="https://nemea.xyz" target="_blank" rel="noopener noreferrer" className="ml-1">Nemea LLC</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;