import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Absorption Ratio
		 * Compute the absorption ratio associated to a universe of assets.
		 * References
		 * * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)
		 * Post assets/analysis/absorption-ratio
		 * @return {AssetsAnalysisAbsorption_ratioPostReturn} OK
		 */
		AssetsAnalysisAbsorption_ratioPost(requestBody: AssetsAnalysisAbsorption_ratioPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsAnalysisAbsorption_ratioPostReturn> {
			return this.http.post<AssetsAnalysisAbsorption_ratioPostReturn>(this.baseUri + 'assets/analysis/absorption-ratio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Turbulence Index
		 * Compute the turbulence index associated to a universe of assets.
		 * References
		 * * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)
		 * * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)
		 * Post assets/analysis/turbulence-index
		 * @return {AssetsAnalysisTurbulence_indexPostReturn} OK
		 */
		AssetsAnalysisTurbulence_indexPost(requestBody: AssetsAnalysisTurbulence_indexPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsAnalysisTurbulence_indexPostReturn> {
			return this.http.post<AssetsAnalysisTurbulence_indexPostReturn>(this.baseUri + 'assets/analysis/turbulence-index', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix
		 * Compute the Pearson asset correlation matrix from either:
		 * * The asset returns
		 * * The asset covariance matrix
		 * References
		 * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
		 * Post assets/correlation/matrix
		 * @return {AssetsCorrelationMatrixPostReturn} OK
		 */
		AssetsCorrelationMatrixPost(requestBody: AssetsCorrelationMatrixPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixPostReturn> {
			return this.http.post<AssetsCorrelationMatrixPostReturn>(this.baseUri + 'assets/correlation/matrix', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix Bounds
		 * Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.
		 * References
		 * * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).
		 * Post assets/correlation/matrix/bounds
		 * @return {AssetsCorrelationMatrixBoundsPostReturn} OK
		 */
		AssetsCorrelationMatrixBoundsPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixBoundsPostReturn> {
			return this.http.post<AssetsCorrelationMatrixBoundsPostReturn>(this.baseUri + 'assets/correlation/matrix/bounds', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Denoised Correlation Matrix
		 * Compute a denoised asset correlation matrix, using one of the following methods:
		 * * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory
		 * References
		 * * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)
		 * Post assets/correlation/matrix/denoised
		 * @return {AssetsCorrelationMatrixDenoisedPostReturn} OK
		 */
		AssetsCorrelationMatrixDenoisedPost(requestBody: AssetsCorrelationMatrixDenoisedPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixDenoisedPostReturn> {
			return this.http.post<AssetsCorrelationMatrixDenoisedPostReturn>(this.baseUri + 'assets/correlation/matrix/denoised', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix Distance
		 * Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:
		 * * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
		 * * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
		 * * Bures distance, defined in the second reference
		 * References
		 * * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
		 * * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)
		 * Post assets/correlation/matrix/distance
		 * @return {AssetsCorrelationMatrixDistancePostReturn} OK
		 */
		AssetsCorrelationMatrixDistancePost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixDistancePostReturn> {
			return this.http.post<AssetsCorrelationMatrixDistancePostReturn>(this.baseUri + 'assets/correlation/matrix/distance', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix Effective Rank
		 * Compute the effective rank of an asset correlation matrix.
		 * References
		 * * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)
		 * Post assets/correlation/matrix/effective-rank
		 * @return {AssetsCorrelationMatrixEffective_rankPostReturn} OK
		 */
		AssetsCorrelationMatrixEffective_rankPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixEffective_rankPostReturn> {
			return this.http.post<AssetsCorrelationMatrixEffective_rankPostReturn>(this.baseUri + 'assets/correlation/matrix/effective-rank', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix Informativeness
		 * Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:
		 * * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
		 * * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
		 * * Bures distance, defined in the third reference
		 * References
		 * * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)
		 * * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
		 * * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)
		 * Post assets/correlation/matrix/informativeness
		 * @return {AssetsCorrelationMatrixInformativenessPostReturn} OK
		 */
		AssetsCorrelationMatrixInformativenessPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixInformativenessPostReturn> {
			return this.http.post<AssetsCorrelationMatrixInformativenessPostReturn>(this.baseUri + 'assets/correlation/matrix/informativeness', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Nearest Correlation Matrix
		 * Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.
		 * References
		 * * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
		 * Post assets/correlation/matrix/nearest
		 * @return {AssetsCorrelationMatrixNearestPostReturn} OK
		 */
		AssetsCorrelationMatrixNearestPost(requestBody: AssetsCorrelationMatrixNearestPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixNearestPostReturn> {
			return this.http.post<AssetsCorrelationMatrixNearestPostReturn>(this.baseUri + 'assets/correlation/matrix/nearest', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Random Correlation Matrix
		 * Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.
		 * References
		 * * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)
		 * Post assets/correlation/matrix/random
		 * @return {AssetsCorrelationMatrixRandomPostReturn} OK
		 */
		AssetsCorrelationMatrixRandomPost(requestBody: AssetsCorrelationMatrixRandomPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixRandomPostReturn> {
			return this.http.post<AssetsCorrelationMatrixRandomPostReturn>(this.baseUri + 'assets/correlation/matrix/random', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix Shrinkage
		 * Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:
		 * * An equicorrelation matrix made of 1
		 * * An equicorrelation matrix made of 0
		 * * An equicorrelation matrix made of -1/(n-1), with n the number of assets
		 * * A provided correlation matrix
		 * References
		 * * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
		 * Post assets/correlation/matrix/shrinkage
		 * @return {AssetsCorrelationMatrixShrinkagePostReturn} OK
		 */
		AssetsCorrelationMatrixShrinkagePost(requestBody: AssetsCorrelationMatrixShrinkagePostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixShrinkagePostReturn> {
			return this.http.post<AssetsCorrelationMatrixShrinkagePostReturn>(this.baseUri + 'assets/correlation/matrix/shrinkage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Theory-Implied Correlation Matrix
		 * Compute the theory-implied asset correlation matrix associated with:
		 * * A hierarchical classification of a universe of assets
		 * * An asset correlation matrix
		 * References
		 * * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)
		 * Post assets/correlation/matrix/theory-implied
		 * @return {AssetsCorrelationMatrixTheory_impliedPostReturn} OK
		 */
		AssetsCorrelationMatrixTheory_impliedPost(requestBody: AssetsCorrelationMatrixTheory_impliedPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixTheory_impliedPostReturn> {
			return this.http.post<AssetsCorrelationMatrixTheory_impliedPostReturn>(this.baseUri + 'assets/correlation/matrix/theory-implied', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Matrix Validation
		 * Validate whether a matrix is an asset correlation matrix.
		 * References
		 * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
		 * Post assets/correlation/matrix/validation
		 * @return {AssetsCorrelationMatrixValidationPostReturn} OK
		 */
		AssetsCorrelationMatrixValidationPost(requestBody: AssetsCorrelationMatrixValidationPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCorrelationMatrixValidationPostReturn> {
			return this.http.post<AssetsCorrelationMatrixValidationPostReturn>(this.baseUri + 'assets/correlation/matrix/validation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Covariance Matrix
		 * Compute the covariance matrix of assets from either:
		 * * The asset correlation matrix and their volatilities (i.e., standard deviations)
		 * * The asset correlation matrix and their variances
		 * * The asset returns
		 * References
		 * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
		 * Post assets/covariance/matrix
		 * @return {AssetsCovarianceMatrixPostReturn} OK
		 */
		AssetsCovarianceMatrixPost(requestBody: AssetsCovarianceMatrixPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCovarianceMatrixPostReturn> {
			return this.http.post<AssetsCovarianceMatrixPostReturn>(this.baseUri + 'assets/covariance/matrix', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Covariance Matrix Effective Rank
		 * Compute the effective rank of an asset covariance matrix.
		 * References
		 * * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)
		 * Post assets/covariance/matrix/effective-rank
		 * @return {AssetsCovarianceMatrixEffective_rankPostReturn} OK
		 */
		AssetsCovarianceMatrixEffective_rankPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<AssetsCovarianceMatrixEffective_rankPostReturn> {
			return this.http.post<AssetsCovarianceMatrixEffective_rankPostReturn>(this.baseUri + 'assets/covariance/matrix/effective-rank', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Exponentially Weighted Covariance Matrix
		 * Compute an exponentially weighted covariance matrix of assets returns.
		 * References
		 * * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)
		 * Post assets/covariance/matrix/exponentially-weighted
		 * @return {AssetsCovarianceMatrixExponentially_weightedPostReturn} OK
		 */
		AssetsCovarianceMatrixExponentially_weightedPost(requestBody: AssetsCovarianceMatrixExponentially_weightedPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCovarianceMatrixExponentially_weightedPostReturn> {
			return this.http.post<AssetsCovarianceMatrixExponentially_weightedPostReturn>(this.baseUri + 'assets/covariance/matrix/exponentially-weighted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Covariance Matrix Validation
		 * Validate whether a matrix is a covariance matrix.
		 * References
		 * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
		 * Post assets/covariance/matrix/validation
		 * @return {AssetsCovarianceMatrixValidationPostReturn} OK
		 */
		AssetsCovarianceMatrixValidationPost(requestBody: AssetsCovarianceMatrixValidationPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsCovarianceMatrixValidationPostReturn> {
			return this.http.post<AssetsCovarianceMatrixValidationPostReturn>(this.baseUri + 'assets/covariance/matrix/validation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Kurtosis
		 * Compute the kurtosis of one or several asset(s), from the asset returns.
		 * References
		 * * [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)
		 * Post assets/kurtosis
		 * @return {AssetsKurtosisPostReturn} OK
		 */
		AssetsKurtosisPost(requestBody: AssetsKurtosisPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsKurtosisPostReturn> {
			return this.http.post<AssetsKurtosisPostReturn>(this.baseUri + 'assets/kurtosis', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adjusted Prices
		 * Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:
		 * * Unadjusted prices
		 * * Capital distributions, like stock dividends
		 * * Splits, like stock splits
		 * The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:
		 * * The price on the last date for which unadjusted prices are available is left unadjusted
		 * * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available
		 * References
		 * * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)
		 * Post assets/prices/adjusted
		 * @return {AssetsPricesAdjustedPostReturn} OK
		 */
		AssetsPricesAdjustedPost(requestBody: AssetsPricesAdjustedPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsPricesAdjustedPostReturn> {
			return this.http.post<AssetsPricesAdjustedPostReturn>(this.baseUri + 'assets/prices/adjusted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Forward-Adjusted Prices
		 * Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:
		 * * Unadjusted prices
		 * * Capital distributions, like stock dividends
		 * * Splits, like stock splits
		 * The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:
		 * * The price on the first date for which unadjusted prices are available is left unadjusted
		 * * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available
		 * References
		 * * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)
		 * Post assets/prices/adjusted/forward
		 * @return {AssetsPricesAdjustedForwardPostReturn} OK
		 */
		AssetsPricesAdjustedForwardPost(requestBody: AssetsPricesAdjustedForwardPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsPricesAdjustedForwardPostReturn> {
			return this.http.post<AssetsPricesAdjustedForwardPostReturn>(this.baseUri + 'assets/prices/adjusted/forward', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Arithmetic Returns
		 * Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
		 * References
		 * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
		 * Post assets/returns
		 * @return {AssetsReturnsPostReturn} OK
		 */
		AssetsReturnsPost(requestBody: AssetsReturnsPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsPostReturn> {
			return this.http.post<AssetsReturnsPostReturn>(this.baseUri + 'assets/returns', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Arithmetic Average Return
		 * Compute the arithmetic average of the return(s) of one or several asset(s).
		 * References
		 * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
		 * Post assets/returns/average
		 * @return {AssetsReturnsAveragePostReturn} OK
		 */
		AssetsReturnsAveragePost(requestBody: AssetsReturnsAveragePostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsAveragePostReturn> {
			return this.http.post<AssetsReturnsAveragePostReturn>(this.baseUri + 'assets/returns/average', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Logarithmic Returns
		 * Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).
		 * References
		 * * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return)
		 * Post assets/returns/logarithmic
		 * @return {AssetsReturnsLogarithmicPostReturn} OK
		 */
		AssetsReturnsLogarithmicPost(requestBody: AssetsReturnsLogarithmicPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsLogarithmicPostReturn> {
			return this.http.post<AssetsReturnsLogarithmicPostReturn>(this.baseUri + 'assets/returns/logarithmic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Bootstrap
		 * Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.
		 * References
		 * * [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full)
		 * * [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data)
		 * * [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)
		 * Post assets/returns/simulation/bootstrap
		 * @return {AssetsReturnsSimulationBootstrapPostReturn} OK
		 */
		AssetsReturnsSimulationBootstrapPost(requestBody: AssetsReturnsSimulationBootstrapPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsSimulationBootstrapPostReturn> {
			return this.http.post<AssetsReturnsSimulationBootstrapPostReturn>(this.baseUri + 'assets/returns/simulation/bootstrap', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cornish-Fisher Distribution
		 * Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.
		 * References
		 * * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
		 * * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)
		 * Post assets/returns/simulation/monte-carlo/cornish-fisher
		 * @return {AssetsReturnsSimulationMonte_carloCornish_fisherPostReturn} OK
		 */
		AssetsReturnsSimulationMonte_carloCornish_fisherPost(requestBody: AssetsReturnsSimulationMonte_carloCornish_fisherPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturn> {
			return this.http.post<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturn>(this.baseUri + 'assets/returns/simulation/monte-carlo/cornish-fisher', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Corrected Cornish-Fisher Distribution
		 * Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.
		 * References
		 * * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
		 * * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)
		 * Post assets/returns/simulation/monte-carlo/cornish-fisher/corrected
		 * @return {AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturn} OK
		 */
		AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPost(requestBody: AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturn> {
			return this.http.post<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturn>(this.baseUri + 'assets/returns/simulation/monte-carlo/cornish-fisher/corrected', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gaussian Distribution
		 * Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.
		 * References
		 * * [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution)
		 * Post assets/returns/simulation/monte-carlo/gaussian
		 * @return {AssetsReturnsSimulationMonte_carloGaussianPostReturn} OK
		 */
		AssetsReturnsSimulationMonte_carloGaussianPost(requestBody: AssetsReturnsSimulationMonte_carloGaussianPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsSimulationMonte_carloGaussianPostReturn> {
			return this.http.post<AssetsReturnsSimulationMonte_carloGaussianPostReturn>(this.baseUri + 'assets/returns/simulation/monte-carlo/gaussian', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Turbulence-partitioned Asset Returns
		 * Partition asset returns into several subsets based on their turbulence index.
		 * References
		 * * [George Chow, Jacquier, E., Kritzman, M., & Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169)
		 * Post assets/returns/turbulence-partitioned
		 * @return {AssetsReturnsTurbulence_partitionedPostReturn} OK
		 */
		AssetsReturnsTurbulence_partitionedPost(requestBody: AssetsReturnsTurbulence_partitionedPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsReturnsTurbulence_partitionedPostReturn> {
			return this.http.post<AssetsReturnsTurbulence_partitionedPostReturn>(this.baseUri + 'assets/returns/turbulence-partitioned', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Skewness
		 * Compute the skewness of one or several asset(s), from the asset returns.
		 * References
		 * * [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)
		 * Post assets/skewness
		 * @return {AssetsSkewnessPostReturn} OK
		 */
		AssetsSkewnessPost(requestBody: AssetsSkewnessPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsSkewnessPostReturn> {
			return this.http.post<AssetsSkewnessPostReturn>(this.baseUri + 'assets/skewness', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Variance
		 * Compute the variance of one or several asset(s) from either:
		 * * The asset returns
		 * * The asset covariance matrix
		 * * The asset volatility(ies)
		 * References
		 * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
		 * Post assets/variance
		 * @return {AssetsVariancePostReturn} OK
		 */
		AssetsVariancePost(requestBody: AssetsVariancePostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsVariancePostReturn> {
			return this.http.post<AssetsVariancePostReturn>(this.baseUri + 'assets/variance', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Volatility
		 * Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:
		 * * The asset returns
		 * * The asset covariance matrix
		 * * The asset variance(s)
		 * References
		 * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
		 * Post assets/volatility
		 * @return {AssetsVolatilityPostReturn} OK
		 */
		AssetsVolatilityPost(requestBody: AssetsVolatilityPostPostBody, headersHandler?: () => HttpHeaders): Observable<AssetsVolatilityPostReturn> {
			return this.http.post<AssetsVolatilityPostReturn>(this.baseUri + 'assets/volatility', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Residualization
		 * Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.
		 * References
		 * * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
		 * * [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)
		 * Post factors/residualization
		 * @return {FactorsResidualizationPostReturn} OK
		 */
		FactorsResidualizationPost(requestBody: FactorsResidualizationPostPostBody, headersHandler?: () => HttpHeaders): Observable<FactorsResidualizationPostReturn> {
			return this.http.post<FactorsResidualizationPostReturn>(this.baseUri + 'factors/residualization', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Alpha
		 * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * Post portfolio/analysis/alpha
		 * @return {PortfolioAnalysisAlphaPostReturn} OK
		 */
		PortfolioAnalysisAlphaPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisAlphaPostReturn> {
			return this.http.post<PortfolioAnalysisAlphaPostReturn>(this.baseUri + 'portfolio/analysis/alpha', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Beta
		 * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * Post portfolio/analysis/beta
		 * @return {PortfolioAnalysisBetaPostReturn} OK
		 */
		PortfolioAnalysisBetaPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisBetaPostReturn> {
			return this.http.post<PortfolioAnalysisBetaPostReturn>(this.baseUri + 'portfolio/analysis/beta', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return Contributions
		 * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * Post portfolio/analysis/contributions/return
		 * @return {PortfolioAnalysisContributionsReturnPostReturn} OK
		 */
		PortfolioAnalysisContributionsReturnPost(requestBody: PortfolioAnalysisContributionsReturnPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisContributionsReturnPostReturn> {
			return this.http.post<PortfolioAnalysisContributionsReturnPostReturn>(this.baseUri + 'portfolio/analysis/contributions/return', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Risk Contributions
		 * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * Post portfolio/analysis/contributions/risk
		 * @return {PortfolioAnalysisContributionsRiskPostReturn} OK
		 */
		PortfolioAnalysisContributionsRiskPost(requestBody: PortfolioAnalysisContributionsRiskPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisContributionsRiskPostReturn> {
			return this.http.post<PortfolioAnalysisContributionsRiskPostReturn>(this.baseUri + 'portfolio/analysis/contributions/risk', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Correlation Spectrum
		 * Compute the correlation spectrum of one or several portfolio(s).
		 * References
		 * * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)
		 * Post portfolio/analysis/correlation-spectrum
		 * @return {PortfolioAnalysisCorrelation_spectrumPostReturn} OK
		 */
		PortfolioAnalysisCorrelation_spectrumPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisCorrelation_spectrumPostReturn> {
			return this.http.post<PortfolioAnalysisCorrelation_spectrumPostReturn>(this.baseUri + 'portfolio/analysis/correlation-spectrum', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Diversification Ratio
		 * Compute the diversification ratio of one or several portfolio(s).
		 * References
		 * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
		 * * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)
		 * Post portfolio/analysis/diversification-ratio
		 * @return {PortfolioAnalysisDiversification_ratioPostReturn} OK
		 */
		PortfolioAnalysisDiversification_ratioPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisDiversification_ratioPostReturn> {
			return this.http.post<PortfolioAnalysisDiversification_ratioPostReturn>(this.baseUri + 'portfolio/analysis/diversification-ratio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Drawdowns
		 * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
		 * References
		 * * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))
		 * Post portfolio/analysis/drawdowns
		 * @return {PortfolioAnalysisDrawdownsPostReturn} OK
		 */
		PortfolioAnalysisDrawdownsPost(requestBody: PortfolioAnalysisDrawdownsPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisDrawdownsPostReturn> {
			return this.http.post<PortfolioAnalysisDrawdownsPostReturn>(this.baseUri + 'portfolio/analysis/drawdowns', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Effective Number of Bets
		 * Compute the effective number of bets of one or several portfolio(s).
		 * References
		 * * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)
		 * Post portfolio/analysis/effective-number-of-bets
		 * @return {PortfolioAnalysisEffective_number_of_betsPostReturn} OK
		 */
		PortfolioAnalysisEffective_number_of_betsPost(requestBody: PortfolioAnalysisEffective_number_of_betsPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisEffective_number_of_betsPostReturn> {
			return this.http.post<PortfolioAnalysisEffective_number_of_betsPostReturn>(this.baseUri + 'portfolio/analysis/effective-number-of-bets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Factor Exposures
		 * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
		 * References
		 * * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)
		 * Post portfolio/analysis/factors/exposures
		 * @return {PortfolioAnalysisFactorsExposuresPostReturn} OK
		 */
		PortfolioAnalysisFactorsExposuresPost(requestBody: PortfolioAnalysisFactorsExposuresPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisFactorsExposuresPostReturn> {
			return this.http.post<PortfolioAnalysisFactorsExposuresPostReturn>(this.baseUri + 'portfolio/analysis/factors/exposures', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Mean-Variance Efficient Frontier
		 * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraint
		 * References
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/analysis/mean-variance/efficient-frontier
		 * @return {PortfolioAnalysisMean_varianceEfficient_frontierPostReturn} OK
		 */
		PortfolioAnalysisMean_varianceEfficient_frontierPost(requestBody: PortfolioAnalysisMean_varianceEfficient_frontierPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisMean_varianceEfficient_frontierPostReturn> {
			return this.http.post<PortfolioAnalysisMean_varianceEfficient_frontierPostReturn>(this.baseUri + 'portfolio/analysis/mean-variance/efficient-frontier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Mean-Variance Minimum Variance Frontier
		 * Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraint
		 * > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.
		 * References
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/analysis/mean-variance/minimum-variance-frontier
		 * @return {PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturn} OK
		 */
		PortfolioAnalysisMean_varianceMinimum_variance_frontierPost(requestBody: PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturn> {
			return this.http.post<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturn>(this.baseUri + 'portfolio/analysis/mean-variance/minimum-variance-frontier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Arithmetic Return
		 * Compute the arithmetic return of one or several portfolio(s) from either:
		 * * Portfolio assets arithmetic returns
		 * * Portfolio values
		 * References
		 * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/analysis/return
		 * @return {PortfolioAnalysisReturnPostReturn} OK
		 */
		PortfolioAnalysisReturnPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisReturnPostReturn> {
			return this.http.post<PortfolioAnalysisReturnPostReturn>(this.baseUri + 'portfolio/analysis/return', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Arithmetic Average Return
		 * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
		 * References
		 * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
		 * Post portfolio/analysis/returns/average
		 * @return {PortfolioAnalysisReturnsAveragePostReturn} OK
		 */
		PortfolioAnalysisReturnsAveragePost(requestBody: PortfolioAnalysisReturnsAveragePostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisReturnsAveragePostReturn> {
			return this.http.post<PortfolioAnalysisReturnsAveragePostReturn>(this.baseUri + 'portfolio/analysis/returns/average', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sharpe Ratio
		 * Compute the Sharpe ratio of one or several portfolio(s) from either:
		 * * Portfolio assets arithmetic returns and assets covariance matrix
		 * * Portfolio values
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/analysis/sharpe-ratio
		 * @return {PortfolioAnalysisSharpe_ratioPostReturn} OK
		 */
		PortfolioAnalysisSharpe_ratioPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisSharpe_ratioPostReturn> {
			return this.http.post<PortfolioAnalysisSharpe_ratioPostReturn>(this.baseUri + 'portfolio/analysis/sharpe-ratio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Bias-Adjusted Sharpe Ratio
		 * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.
		 * References
		 * * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
		 * Post portfolio/analysis/sharpe-ratio/bias-adjusted
		 * @return {PortfolioAnalysisSharpe_ratioBias_adjustedPostReturn} OK
		 */
		PortfolioAnalysisSharpe_ratioBias_adjustedPost(requestBody: PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisSharpe_ratioBias_adjustedPostReturn> {
			return this.http.post<PortfolioAnalysisSharpe_ratioBias_adjustedPostReturn>(this.baseUri + 'portfolio/analysis/sharpe-ratio/bias-adjusted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sharpe Ratio Confidence Interval
		 * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).
		 * References
		 * * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
		 * Post portfolio/analysis/sharpe-ratio/confidence-interval
		 * @return {PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturn} OK
		 */
		PortfolioAnalysisSharpe_ratioConfidence_intervalPost(requestBody: PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturn> {
			return this.http.post<PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturn>(this.baseUri + 'portfolio/analysis/sharpe-ratio/confidence-interval', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Probabilistic Sharpe Ratio
		 * Compute the probabilistic Sharpe ratio of one or several portfolio(s).
		 * References
		 * * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
		 * * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)
		 * Post portfolio/analysis/sharpe-ratio/probabilistic
		 * @return {PortfolioAnalysisSharpe_ratioProbabilisticPostReturn} OK
		 */
		PortfolioAnalysisSharpe_ratioProbabilisticPost(requestBody: PortfolioAnalysisSharpe_ratioProbabilisticPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisSharpe_ratioProbabilisticPostReturn> {
			return this.http.post<PortfolioAnalysisSharpe_ratioProbabilisticPostReturn>(this.baseUri + 'portfolio/analysis/sharpe-ratio/probabilistic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Minimum Track Record Length
		 * Compute the minimum track record length of one or several portfolio(s).
		 * References
		 * * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)
		 * Post portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length
		 * @return {PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturn} OK
		 */
		PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPost(requestBody: PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturn> {
			return this.http.post<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturn>(this.baseUri + 'portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Tracking Error
		 * Compute the tracking error between a benchmark and one or several portfolio(s).
		 * References
		 * * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * Post portfolio/analysis/tracking-error
		 * @return {PortfolioAnalysisTracking_errorPostReturn} OK
		 */
		PortfolioAnalysisTracking_errorPost(requestBody: PortfolioAnalysisTracking_errorPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisTracking_errorPostReturn> {
			return this.http.post<PortfolioAnalysisTracking_errorPostReturn>(this.baseUri + 'portfolio/analysis/tracking-error', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Ulcer Index
		 * Compute the Ulcer Index of one or several portfolio(s).
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
		 * Post portfolio/analysis/ulcer-index
		 * @return {PortfolioAnalysisUlcer_indexPostReturn} OK
		 */
		PortfolioAnalysisUlcer_indexPost(requestBody: PortfolioAnalysisUlcer_indexPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisUlcer_indexPostReturn> {
			return this.http.post<PortfolioAnalysisUlcer_indexPostReturn>(this.baseUri + 'portfolio/analysis/ulcer-index', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Ulcer Performance Index
		 * Compute the Ulcer Performance Index of one or several portfolio(s).
		 * References
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
		 * Post portfolio/analysis/ulcer-performance-index
		 * @return {PortfolioAnalysisUlcer_performance_indexPostReturn} OK
		 */
		PortfolioAnalysisUlcer_performance_indexPost(requestBody: PortfolioAnalysisUlcer_performance_indexPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisUlcer_performance_indexPostReturn> {
			return this.http.post<PortfolioAnalysisUlcer_performance_indexPostReturn>(this.baseUri + 'portfolio/analysis/ulcer-performance-index', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cornish-Fisher Conditional Value At Risk
		 * Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).
		 * * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
		 * * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)
		 * Post portfolio/analysis/value-at-risk/conditional/cornish-fisher
		 * @return {PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskConditionalCornish_fisherPost(requestBody: PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/conditional/cornish-fisher', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Corrected Cornish-Fisher Conditional Value At Risk
		 * Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
		 * * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)
		 * Post portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected
		 * @return {PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPost(requestBody: PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gaussian Conditional Value At Risk
		 * Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).
		 * Post portfolio/analysis/value-at-risk/conditional/gaussian
		 * @return {PortfolioAnalysisValue_at_riskConditionalGaussianPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskConditionalGaussianPost(requestBody: PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskConditionalGaussianPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskConditionalGaussianPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/conditional/gaussian', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Historical Conditional Value At Risk
		 * Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
		 * * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)
		 * Post portfolio/analysis/value-at-risk/conditional/historical
		 * @return {PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskConditionalHistoricalPost(requestBody: PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/conditional/historical', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cornish-Fisher Value At Risk
		 * Compute the Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Laurent Favre and José-Antonio Galeano, Mean-Modified Value-at-Risk Optimization with Hedge Funds, The Journal of Alternative Investments Fall 2002, 5 (2) 21-25](https://jai.pm-research.com/content/5/2/21)
		 * * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)
		 * Post portfolio/analysis/value-at-risk/cornish-fisher
		 * @return {PortfolioAnalysisValue_at_riskCornish_fisherPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskCornish_fisherPost(requestBody: PortfolioAnalysisValue_at_riskCornish_fisherPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskCornish_fisherPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskCornish_fisherPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/cornish-fisher', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Corrected Cornish-Fisher Value At Risk
		 * Compute the corrected Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)
		 * Post portfolio/analysis/value-at-risk/cornish-fisher/corrected
		 * @return {PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPost(requestBody: PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/cornish-fisher/corrected', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gaussian Value At Risk
		 * Compute the Gaussian value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Ballotta, Laura and Fusai, Gianluca, A Gentle Introduction to Value at Risk](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2942138)
		 * Post portfolio/analysis/value-at-risk/gaussian
		 * @return {PortfolioAnalysisValue_at_riskGaussianPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskGaussianPost(requestBody: PortfolioAnalysisValue_at_riskGaussianPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskGaussianPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskGaussianPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/gaussian', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Historical Value At Risk
		 * Compute the historical value at risk of one or several portfolio(s) from portfolio values.
		 * References
		 * * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
		 * * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)
		 * Post portfolio/analysis/value-at-risk/historical
		 * @return {PortfolioAnalysisValue_at_riskHistoricalPostReturn} OK
		 */
		PortfolioAnalysisValue_at_riskHistoricalPost(requestBody: PortfolioAnalysisValue_at_riskHistoricalPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisValue_at_riskHistoricalPostReturn> {
			return this.http.post<PortfolioAnalysisValue_at_riskHistoricalPostReturn>(this.baseUri + 'portfolio/analysis/value-at-risk/historical', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Volatility
		 * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:
		 * * Portfolio assets covariance matrix
		 * * Portfolio values
		 * References
		 * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
		 * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/analysis/volatility
		 * @return {PortfolioAnalysisVolatilityPostReturn} OK
		 */
		PortfolioAnalysisVolatilityPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<PortfolioAnalysisVolatilityPostReturn> {
			return this.http.post<PortfolioAnalysisVolatilityPostReturn>(this.baseUri + 'portfolio/analysis/volatility', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Investable Portfolio
		 * Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
		 * * The desired assets weights
		 * * The desired assets groups weights
		 * * The desired maximum assets groups weights
		 * * The prices of the assets
		 * * The portfolio value
		 * * The requirement to purchase some assets by round lots or by odd lots
		 * * The possibility to purchase some assets by a fractional quantity of shares
		 * * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
		 * References
		 * * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
		 * Post portfolio/construction/investable
		 * @return {PortfolioConstructionInvestablePostReturn} OK
		 */
		PortfolioConstructionInvestablePost(requestBody: PortfolioConstructionInvestablePostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioConstructionInvestablePostReturn> {
			return this.http.post<PortfolioConstructionInvestablePostReturn>(this.baseUri + 'portfolio/construction/investable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Mimicking Portfolio
		 * Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
		 * Post portfolio/construction/mimicking
		 * @return {PortfolioConstructionMimickingPostReturn} OK
		 */
		PortfolioConstructionMimickingPost(requestBody: PortfolioConstructionMimickingPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioConstructionMimickingPostReturn> {
			return this.http.post<PortfolioConstructionMimickingPostReturn>(this.baseUri + 'portfolio/construction/mimicking', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Random Portfolio
		 * Construct one or several random portfolio(s), optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
		 * References
		 * * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
		 * Post portfolio/construction/random
		 * @return {PortfolioConstructionRandomPostReturn} OK
		 */
		PortfolioConstructionRandomPost(requestBody: PortfolioConstructionRandomPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioConstructionRandomPostReturn> {
			return this.http.post<PortfolioConstructionRandomPostReturn>(this.baseUri + 'portfolio/construction/random', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Equal Risk Contributions Portfolio
		 * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * References
		 * * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
		 * Post portfolio/optimization/equal-risk-contributions
		 * @return {PortfolioOptimizationEqual_risk_contributionsPostReturn} OK
		 */
		PortfolioOptimizationEqual_risk_contributionsPost(requestBody: PortfolioOptimizationEqual_risk_contributionsPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationEqual_risk_contributionsPostReturn> {
			return this.http.post<PortfolioOptimizationEqual_risk_contributionsPostReturn>(this.baseUri + 'portfolio/optimization/equal-risk-contributions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Equal Sharpe Ratio Contributions Portfolio
		 * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.
		 * References
		 * * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
		 * Post portfolio/optimization/equal-sharpe-ratio-contributions
		 * @return {PortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturn} OK
		 */
		PortfolioOptimizationEqual_sharpe_ratio_contributionsPost(requestBody: PortfolioOptimizationEqual_sharpe_ratio_contributionsPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturn> {
			return this.http.post<PortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturn>(this.baseUri + 'portfolio/optimization/equal-sharpe-ratio-contributions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Equal Volatility Weighted Portfolio
		 * Compute the asset weights of the equal volatility-weighted portfolio.
		 * References
		 * * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)
		 * Post portfolio/optimization/equal-volatility-weighted
		 * @return {PortfolioOptimizationEqual_volatility_weightedPostReturn} OK
		 */
		PortfolioOptimizationEqual_volatility_weightedPost(requestBody: PortfolioOptimizationEqual_volatility_weightedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationEqual_volatility_weightedPostReturn> {
			return this.http.post<PortfolioOptimizationEqual_volatility_weightedPostReturn>(this.baseUri + 'portfolio/optimization/equal-volatility-weighted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Equal Weighted Portfolio
		 * Compute the asset weights of the equal-weighted portfolio.
		 * References
		 * * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
		 * Post portfolio/optimization/equal-weighted
		 * @return {PortfolioOptimizationEqual_weightedPostReturn} OK
		 */
		PortfolioOptimizationEqual_weightedPost(requestBody: PortfolioOptimizationEqual_weightedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationEqual_weightedPostReturn> {
			return this.http.post<PortfolioOptimizationEqual_weightedPostReturn>(this.baseUri + 'portfolio/optimization/equal-weighted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Hierarchical Risk Parity Portfolio
		 * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)
		 * * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)
		 * Post portfolio/optimization/hierarchical-risk-parity
		 * @return {PortfolioOptimizationHierarchical_risk_parityPostReturn} OK
		 */
		PortfolioOptimizationHierarchical_risk_parityPost(requestBody: PortfolioOptimizationHierarchical_risk_parityPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationHierarchical_risk_parityPostReturn> {
			return this.http.post<PortfolioOptimizationHierarchical_risk_parityPostReturn>(this.baseUri + 'portfolio/optimization/hierarchical-risk-parity', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Hierarchical Clustering-Based Risk Parity Portfolio
		 * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)
		 * * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)
		 * * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)
		 * * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)
		 * Post portfolio/optimization/hierarchical-risk-parity/clustering-based
		 * @return {PortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturn} OK
		 */
		PortfolioOptimizationHierarchical_risk_parityClustering_basedPost(requestBody: PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturn> {
			return this.http.post<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturn>(this.baseUri + 'portfolio/optimization/hierarchical-risk-parity/clustering-based', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Inverse Variance Weighted Portfolio
		 * Compute the asset weights of the inverse variance-weighted portfolio.
		 * References
		 * * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
		 * Post portfolio/optimization/inverse-variance-weighted
		 * @return {PortfolioOptimizationInverse_variance_weightedPostReturn} OK
		 */
		PortfolioOptimizationInverse_variance_weightedPost(requestBody: PortfolioOptimizationInverse_variance_weightedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationInverse_variance_weightedPostReturn> {
			return this.http.post<PortfolioOptimizationInverse_variance_weightedPostReturn>(this.baseUri + 'portfolio/optimization/inverse-variance-weighted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Inverse Volatility Weighted Portfolio
		 * Compute the asset weights of the inverse volatility-weighted portfolio.
		 * References
		 * * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
		 * Post portfolio/optimization/inverse-volatility-weighted
		 * @return {PortfolioOptimizationInverse_volatility_weightedPostReturn} OK
		 */
		PortfolioOptimizationInverse_volatility_weightedPost(requestBody: PortfolioOptimizationInverse_volatility_weightedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationInverse_volatility_weightedPostReturn> {
			return this.http.post<PortfolioOptimizationInverse_volatility_weightedPostReturn>(this.baseUri + 'portfolio/optimization/inverse-volatility-weighted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Market Capitalization Weighted Portfolio
		 * Compute the asset weights of the market capitalization-weighted portfolio.
		 * References
		 * * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
		 * Post portfolio/optimization/market-capitalization-weighted
		 * @return {PortfolioOptimizationMarket_capitalization_weightedPostReturn} OK
		 */
		PortfolioOptimizationMarket_capitalization_weightedPost(requestBody: PortfolioOptimizationMarket_capitalization_weightedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMarket_capitalization_weightedPostReturn> {
			return this.http.post<PortfolioOptimizationMarket_capitalization_weightedPostReturn>(this.baseUri + 'portfolio/optimization/market-capitalization-weighted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Maximum Decorrelation Portfolio
		 * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
		 * Post portfolio/optimization/maximum-decorrelation
		 * @return {PortfolioOptimizationMaximum_decorrelationPostReturn} OK
		 */
		PortfolioOptimizationMaximum_decorrelationPost(requestBody: PortfolioOptimizationMaximum_decorrelationPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_decorrelationPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_decorrelationPostReturn>(this.baseUri + 'portfolio/optimization/maximum-decorrelation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Maximum Return Portfolio
		 * Compute the asset weights of the maximum return portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/maximum-return
		 * @return {PortfolioOptimizationMaximum_returnPostReturn} OK
		 */
		PortfolioOptimizationMaximum_returnPost(requestBody: PortfolioOptimizationMaximum_returnPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_returnPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_returnPostReturn>(this.baseUri + 'portfolio/optimization/maximum-return', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Diversified Maximum Return Portfolio
		 * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
		 * References
		 * * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
		 * * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/maximum-return/diversified
		 * @return {PortfolioOptimizationMaximum_returnDiversifiedPostReturn} OK
		 */
		PortfolioOptimizationMaximum_returnDiversifiedPost(requestBody: PortfolioOptimizationMaximum_returnDiversifiedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_returnDiversifiedPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_returnDiversifiedPostReturn>(this.baseUri + 'portfolio/optimization/maximum-return/diversified', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Subset Resampling-Based Maximum Return Portfolio
		 * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
		 * * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/maximum-return/subset-resampling-based
		 * @return {PortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturn} OK
		 */
		PortfolioOptimizationMaximum_returnSubset_resampling_basedPost(requestBody: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturn>(this.baseUri + 'portfolio/optimization/maximum-return/subset-resampling-based', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Maximum Sharpe Ratio Portfolio
		 * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/maximum-sharpe-ratio
		 * @return {PortfolioOptimizationMaximum_sharpe_ratioPostReturn} OK
		 */
		PortfolioOptimizationMaximum_sharpe_ratioPost(requestBody: PortfolioOptimizationMaximum_sharpe_ratioPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_sharpe_ratioPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_sharpe_ratioPostReturn>(this.baseUri + 'portfolio/optimization/maximum-sharpe-ratio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Diversified Maximum Sharpe Ratio Portfolio
		 * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
		 * References
		 * * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
		 * * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/maximum-sharpe-ratio/diversified
		 * @return {PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturn} OK
		 */
		PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPost(requestBody: PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturn>(this.baseUri + 'portfolio/optimization/maximum-sharpe-ratio/diversified', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Subset Resampling-Based Maximum Sharpe Ratio Portfolio
		 * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
		 * * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based
		 * @return {PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturn} OK
		 */
		PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPost(requestBody: PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturn>(this.baseUri + 'portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Maximum Ulcer Performance Index Portfolio
		 * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * Notes:
		 * * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index
		 * References
		 * * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
		 * * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
		 * * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)
		 * Post portfolio/optimization/maximum-ulcer-performance-index
		 * @return {PortfolioOptimizationMaximum_ulcer_performance_indexPostReturn} OK
		 */
		PortfolioOptimizationMaximum_ulcer_performance_indexPost(requestBody: PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMaximum_ulcer_performance_indexPostReturn> {
			return this.http.post<PortfolioOptimizationMaximum_ulcer_performance_indexPostReturn>(this.baseUri + 'portfolio/optimization/maximum-ulcer-performance-index', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Mean-Variance Efficient Portfolio
		 * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
		 * References
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/mean-variance-efficient
		 * @return {PortfolioOptimizationMean_variance_efficientPostReturn} OK
		 */
		PortfolioOptimizationMean_variance_efficientPost(requestBody: PortfolioOptimizationMean_variance_efficientPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMean_variance_efficientPostReturn> {
			return this.http.post<PortfolioOptimizationMean_variance_efficientPostReturn>(this.baseUri + 'portfolio/optimization/mean-variance-efficient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Diversified Mean-Variance Efficient Portfolio
		 * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
		 * > A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.
		 * References
		 * * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
		 * * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/mean-variance-efficient/diversified
		 * @return {PortfolioOptimizationMean_variance_efficientDiversifiedPostReturn} OK
		 */
		PortfolioOptimizationMean_variance_efficientDiversifiedPost(requestBody: PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMean_variance_efficientDiversifiedPostReturn> {
			return this.http.post<PortfolioOptimizationMean_variance_efficientDiversifiedPostReturn>(this.baseUri + 'portfolio/optimization/mean-variance-efficient/diversified', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Subset Resampling-Based Mean-Variance Efficient Portfolio
		 * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
		 * * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/mean-variance-efficient/subset-resampling-based
		 * @return {PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturn} OK
		 */
		PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPost(requestBody: PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturn> {
			return this.http.post<PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturn>(this.baseUri + 'portfolio/optimization/mean-variance-efficient/subset-resampling-based', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Minimum Correlation Portfolio
		 * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
		 * References
		 * * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
		 * Post portfolio/optimization/minimum-correlation
		 * @return {PortfolioOptimizationMinimum_correlationPostReturn} OK
		 */
		PortfolioOptimizationMinimum_correlationPost(requestBody: PortfolioOptimizationMinimum_correlationPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMinimum_correlationPostReturn> {
			return this.http.post<PortfolioOptimizationMinimum_correlationPostReturn>(this.baseUri + 'portfolio/optimization/minimum-correlation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Minimum Ulcer Index Portfolio
		 * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
		 * * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
		 * * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)
		 * Post portfolio/optimization/minimum-ulcer-index
		 * @return {PortfolioOptimizationMinimum_ulcer_indexPostReturn} OK
		 */
		PortfolioOptimizationMinimum_ulcer_indexPost(requestBody: PortfolioOptimizationMinimum_ulcer_indexPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMinimum_ulcer_indexPostReturn> {
			return this.http.post<PortfolioOptimizationMinimum_ulcer_indexPostReturn>(this.baseUri + 'portfolio/optimization/minimum-ulcer-index', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Minimum Variance Portfolio
		 * Compute the asset weights of the minimum variance portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/minimum-variance
		 * @return {PortfolioOptimizationMinimum_variancePostReturn} OK
		 */
		PortfolioOptimizationMinimum_variancePost(requestBody: PortfolioOptimizationMinimum_variancePostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMinimum_variancePostReturn> {
			return this.http.post<PortfolioOptimizationMinimum_variancePostReturn>(this.baseUri + 'portfolio/optimization/minimum-variance', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Diversified Minimum Variance Portfolio
		 * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
		 * References
		 * * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
		 * * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/minimum-variance/diversified
		 * @return {PortfolioOptimizationMinimum_varianceDiversifiedPostReturn} OK
		 */
		PortfolioOptimizationMinimum_varianceDiversifiedPost(requestBody: PortfolioOptimizationMinimum_varianceDiversifiedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMinimum_varianceDiversifiedPostReturn> {
			return this.http.post<PortfolioOptimizationMinimum_varianceDiversifiedPostReturn>(this.baseUri + 'portfolio/optimization/minimum-variance/diversified', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Subset Resampling-Based Minimum Variance Portfolio
		 * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
		 * * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
		 * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
		 * Post portfolio/optimization/minimum-variance/subset-resampling-based
		 * @return {PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturn} OK
		 */
		PortfolioOptimizationMinimum_varianceSubset_resampling_basedPost(requestBody: PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturn> {
			return this.http.post<PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturn>(this.baseUri + 'portfolio/optimization/minimum-variance/subset-resampling-based', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Most Diversified Portfolio
		 * Compute the asset weights of the most diversified portfolio, optionally subject to:
		 * * Minimum and maximum weights constraints
		 * * Maximum group weights constraints
		 * * Minimum and maximum portfolio exposure constraints
		 * References
		 * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
		 * Post portfolio/optimization/most-diversified
		 * @return {PortfolioOptimizationMost_diversifiedPostReturn} OK
		 */
		PortfolioOptimizationMost_diversifiedPost(requestBody: PortfolioOptimizationMost_diversifiedPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioOptimizationMost_diversifiedPostReturn> {
			return this.http.post<PortfolioOptimizationMost_diversifiedPostReturn>(this.baseUri + 'portfolio/optimization/most-diversified', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Drift-weight Portfolio Rebalancing
		 * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
		 * References
		 * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
		 * Post portfolio/simulation/rebalancing/drift-weight
		 * @return {PortfolioSimulationRebalancingDrift_weightPostReturn} OK
		 */
		PortfolioSimulationRebalancingDrift_weightPost(requestBody: PortfolioSimulationRebalancingDrift_weightPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioSimulationRebalancingDrift_weightPostReturn> {
			return this.http.post<PortfolioSimulationRebalancingDrift_weightPostReturn>(this.baseUri + 'portfolio/simulation/rebalancing/drift-weight', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Fixed-weight Portfolio Rebalancing
		 * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
		 * References
		 * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
		 * Post portfolio/simulation/rebalancing/fixed-weight
		 * @return {PortfolioSimulationRebalancingFixed_weightPostReturn} OK
		 */
		PortfolioSimulationRebalancingFixed_weightPost(requestBody: PortfolioSimulationRebalancingFixed_weightPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioSimulationRebalancingFixed_weightPostReturn> {
			return this.http.post<PortfolioSimulationRebalancingFixed_weightPostReturn>(this.baseUri + 'portfolio/simulation/rebalancing/fixed-weight', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Random-weight Portfolio Rebalancing
		 * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
		 * References
		 * * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
		 * Post portfolio/simulation/rebalancing/random-weight
		 * @return {PortfolioSimulationRebalancingRandom_weightPostReturn} OK
		 */
		PortfolioSimulationRebalancingRandom_weightPost(requestBody: PortfolioSimulationRebalancingRandom_weightPostPostBody, headersHandler?: () => HttpHeaders): Observable<PortfolioSimulationRebalancingRandom_weightPostReturn> {
			return this.http.post<PortfolioSimulationRebalancingRandom_weightPostReturn>(this.baseUri + 'portfolio/simulation/rebalancing/random-weight', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export interface AssetsAnalysisAbsorption_ratioPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;
		assetsCovarianceMatrixEigenvectors?: AssetsAnalysisAbsorption_ratioPostPostBodyAssetsCovarianceMatrixEigenvectors;
	}
	export interface AssetsAnalysisAbsorption_ratioPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreateAssetsAnalysisAbsorption_ratioPostPostBodyFormGroup() {
		return new FormGroup<AssetsAnalysisAbsorption_ratioPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface AssetsAnalysisAbsorption_ratioPostPostBodyAssetsCovarianceMatrixEigenvectors {

		/**
		 * The number of eigenvectors to retain in the numerator of the absorption ratio, which must be lower than the number of assets; defaults to [1/5-th] the number of assets
		 * Minimum: 1
		 */
		eigenvectorsRetained?: number | null;
	}
	export interface AssetsAnalysisAbsorption_ratioPostPostBodyAssetsCovarianceMatrixEigenvectorsFormProperties {

		/**
		 * The number of eigenvectors to retain in the numerator of the absorption ratio, which must be lower than the number of assets; defaults to [1/5-th] the number of assets
		 * Minimum: 1
		 */
		eigenvectorsRetained: FormControl<number | null | undefined>,
	}
	export function CreateAssetsAnalysisAbsorption_ratioPostPostBodyAssetsCovarianceMatrixEigenvectorsFormGroup() {
		return new FormGroup<AssetsAnalysisAbsorption_ratioPostPostBodyAssetsCovarianceMatrixEigenvectorsFormProperties>({
			eigenvectorsRetained: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface AssetsAnalysisAbsorption_ratioPostReturn {

		/**
		 * The absorption ratio of the universe of assets
		 * Required
		 * Type: double
		 */
		assetsAbsorptionRatio: number;
	}
	export interface AssetsAnalysisAbsorption_ratioPostReturnFormProperties {

		/**
		 * The absorption ratio of the universe of assets
		 * Required
		 * Type: double
		 */
		assetsAbsorptionRatio: FormControl<number | null | undefined>,
	}
	export function CreateAssetsAnalysisAbsorption_ratioPostReturnFormGroup() {
		return new FormGroup<AssetsAnalysisAbsorption_ratioPostReturnFormProperties>({
			assetsAbsorptionRatio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsAnalysisTurbulence_indexPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: number;

		/**
		 * assetsAverageReturns[i] is the average return of asset i over an historical reference period
		 * Required
		 * Minimum items: 1
		 */
		assetsAverageReturns: Array<number>;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j over an historical reference period
		 * Required
		 * Minimum items: 1
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the return of asset i over a period different from the historical reference period
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
	}
	export interface AssetsAnalysisTurbulence_indexPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreateAssetsAnalysisTurbulence_indexPostPostBodyFormGroup() {
		return new FormGroup<AssetsAnalysisTurbulence_indexPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface AssetsAnalysisTurbulence_indexPostReturn {

		/**
		 * the turbulence index of the universe of assets
		 * Required
		 * Type: double
		 */
		assetsTurbulenceIndex: number;
	}
	export interface AssetsAnalysisTurbulence_indexPostReturnFormProperties {

		/**
		 * the turbulence index of the universe of assets
		 * Required
		 * Type: double
		 */
		assetsTurbulenceIndex: FormControl<number | null | undefined>,
	}
	export function CreateAssetsAnalysisTurbulence_indexPostReturnFormGroup() {
		return new FormGroup<AssetsAnalysisTurbulence_indexPostReturnFormProperties>({
			assetsTurbulenceIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsCorrelationMatrixPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		AssetsCorrelationMatrixPostPostBodyAssets: Array<AssetsCorrelationMatrixPostPostBodyAssets>;
	}
	export interface AssetsCorrelationMatrixPostPostBodyFormProperties {
	}
	export function CreateAssetsCorrelationMatrixPostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixPostPostBodyFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsCorrelationMatrixPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsCorrelationMatrixPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixPostReturn {

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixBoundsPostReturn {

		/**
		 * assetsCorrelationMatrixLowerBounds[i][j] is the lower bound of the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrixLowerBounds: Array<string>;

		/**
		 * assetsCorrelationMatrixUpperBounds[i][j] is the upper bound of the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrixUpperBounds: Array<string>;
	}
	export interface AssetsCorrelationMatrixBoundsPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixBoundsPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixBoundsPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixDenoisedPostPostBody {

		/**
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;

		/**
		 * The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix
		 * Required
		 * Minimum: 0
		 */
		assetsCorrelationMatrixAspectRatio: number;

		/** The method used to denoise the asset correlation matrix */
		denoisingMethod?: AssetsCorrelationMatrixDenoisedPostPostBodyDenoisingMethod | null;
	}
	export interface AssetsCorrelationMatrixDenoisedPostPostBodyFormProperties {

		/**
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix
		 * Required
		 * Minimum: 0
		 */
		assetsCorrelationMatrixAspectRatio: FormControl<number | null | undefined>,

		/** The method used to denoise the asset correlation matrix */
		denoisingMethod: FormControl<AssetsCorrelationMatrixDenoisedPostPostBodyDenoisingMethod | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixDenoisedPostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixDenoisedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			assetsCorrelationMatrixAspectRatio: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			denoisingMethod: new FormControl<AssetsCorrelationMatrixDenoisedPostPostBodyDenoisingMethod | null | undefined>(undefined),
		});

	}

	export enum AssetsCorrelationMatrixDenoisedPostPostBodyDenoisingMethod { eigenvaluesClipping = 'eigenvaluesClipping' }

	export interface AssetsCorrelationMatrixDenoisedPostReturn {

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; assetsCorrelationMatrix is possibly null in case the denoising method did not manage to denoise the provided asset correlation matrix
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixDenoisedPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixDenoisedPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixDenoisedPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixDistancePostReturn {

		/**
		 * The computed distance between the two correlation matrices
		 * Required
		 * Minimum: 0
		 */
		assetsCorrelationMatrixDistance: number;
	}
	export interface AssetsCorrelationMatrixDistancePostReturnFormProperties {

		/**
		 * The computed distance between the two correlation matrices
		 * Required
		 * Minimum: 0
		 */
		assetsCorrelationMatrixDistance: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixDistancePostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixDistancePostReturnFormProperties>({
			assetsCorrelationMatrixDistance: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface AssetsCorrelationMatrixEffective_rankPostReturn {

		/**
		 * The effective rank of the asset correlation matrix
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrixEffectiveRank: Array<string>;
	}
	export interface AssetsCorrelationMatrixEffective_rankPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixEffective_rankPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixEffective_rankPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixInformativenessPostReturn {

		/**
		 * The informativeness of the asset correlation matrix
		 * Required
		 * Minimum: 0
		 */
		assetsCorrelationMatrixInformativeness: number;
	}
	export interface AssetsCorrelationMatrixInformativenessPostReturnFormProperties {

		/**
		 * The informativeness of the asset correlation matrix
		 * Required
		 * Minimum: 0
		 */
		assetsCorrelationMatrixInformativeness: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixInformativenessPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixInformativenessPostReturnFormProperties>({
			assetsCorrelationMatrixInformativeness: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface AssetsCorrelationMatrixNearestPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsApproximateCorrelationMatrix[i][i] is the approximate correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsApproximateCorrelationMatrix: Array<string>;

		/** assetsFixedCorrelations[k] is the couple of indices (i,j) of the assets i and j for which to keep the approximate correlation assetsApproximateCorrelationMatrix[i][j] fixed */
		assetsFixedCorrelations?: Array<string>;
	}
	export interface AssetsCorrelationMatrixNearestPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixNearestPostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixNearestPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface AssetsCorrelationMatrixNearestPostReturn {

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixNearestPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixNearestPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixNearestPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixRandomPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;
	}
	export interface AssetsCorrelationMatrixRandomPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixRandomPostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixRandomPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface AssetsCorrelationMatrixRandomPostReturn {

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixRandomPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixRandomPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixRandomPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixShrinkagePostPostBody {

		/**
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;

		/**
		 * The shrinkage factor
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		shrinkageFactor: number;

		/**
		 * The shrinkage target correlation matrix
		 * Required
		 */
		targetEquicorrelationMatrix: AssetsCorrelationMatrixShrinkagePostPostBodyTargetEquicorrelationMatrix;
	}
	export interface AssetsCorrelationMatrixShrinkagePostPostBodyFormProperties {

		/**
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The shrinkage factor
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		shrinkageFactor: FormControl<number | null | undefined>,

		/**
		 * The shrinkage target correlation matrix
		 * Required
		 */
		targetEquicorrelationMatrix: FormControl<AssetsCorrelationMatrixShrinkagePostPostBodyTargetEquicorrelationMatrix | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixShrinkagePostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixShrinkagePostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			shrinkageFactor: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			targetEquicorrelationMatrix: new FormControl<AssetsCorrelationMatrixShrinkagePostPostBodyTargetEquicorrelationMatrix | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssetsCorrelationMatrixShrinkagePostPostBodyTargetEquicorrelationMatrix { minimumEquicorrelationMatrix = 'minimumEquicorrelationMatrix', zeroEquicorrelationMatrix = 'zeroEquicorrelationMatrix', maximumEquicorrelationMatrix = 'maximumEquicorrelationMatrix' }

	export interface AssetsCorrelationMatrixShrinkagePostReturn {

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixShrinkagePostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixShrinkagePostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixShrinkagePostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixTheory_impliedPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		AssetsCorrelationMatrixTheory_impliedPostPostBodyAssets: Array<AssetsCorrelationMatrixTheory_impliedPostPostBodyAssets>;

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;

		/** The hierarchical clustering method to use */
		clusteringMethod?: AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null;
	}
	export interface AssetsCorrelationMatrixTheory_impliedPostPostBodyFormProperties {

		/** The hierarchical clustering method to use */
		clusteringMethod: FormControl<AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixTheory_impliedPostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixTheory_impliedPostPostBodyFormProperties>({
			clusteringMethod: new FormControl<AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null | undefined>(undefined),
		});

	}

	export interface AssetsCorrelationMatrixTheory_impliedPostPostBodyAssets {

		/**
		 * assetHierarchicalClassification[i] is the i+1-th level of the hierarchical classification of the asset, from the most generic classification to the most specific classification; all the assetHierarchicalClassification arrays must have the same length
		 * Required
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		assetHierarchicalClassification: Array<string>;
	}
	export interface AssetsCorrelationMatrixTheory_impliedPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsCorrelationMatrixTheory_impliedPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixTheory_impliedPostPostBodyAssetsFormProperties>({
		});

	}

	export enum AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod { singleLinkage = 'singleLinkage', averageLinkage = 'averageLinkage', completeLinkage = 'completeLinkage', wardLinkage = 'wardLinkage' }

	export interface AssetsCorrelationMatrixTheory_impliedPostReturn {

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixTheory_impliedPostReturnFormProperties {
	}
	export function CreateAssetsCorrelationMatrixTheory_impliedPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixTheory_impliedPostReturnFormProperties>({
		});

	}

	export interface AssetsCorrelationMatrixValidationPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;
	}
	export interface AssetsCorrelationMatrixValidationPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixValidationPostPostBodyFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixValidationPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface AssetsCorrelationMatrixValidationPostReturn {

		/**
		 * Indicates whether the matrix is a valid correlation matrix
		 * Required
		 */
		message: AssetsCorrelationMatrixValidationPostReturnMessage;
	}
	export interface AssetsCorrelationMatrixValidationPostReturnFormProperties {

		/**
		 * Indicates whether the matrix is a valid correlation matrix
		 * Required
		 */
		message: FormControl<AssetsCorrelationMatrixValidationPostReturnMessage | null | undefined>,
	}
	export function CreateAssetsCorrelationMatrixValidationPostReturnFormGroup() {
		return new FormGroup<AssetsCorrelationMatrixValidationPostReturnFormProperties>({
			message: new FormControl<AssetsCorrelationMatrixValidationPostReturnMessage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssetsCorrelationMatrixValidationPostReturnMessage { 'valid correlation matrix' = 'valid correlation matrix', 'invalid correlation matrix - non symmetric matrix' = 'invalid correlation matrix - non symmetric matrix', 'invalid correlation matrix - non positive diagonal elements' = 'invalid correlation matrix - non positive diagonal elements', 'invalid correlation matrix - non positive semi-definite matrix' = 'invalid correlation matrix - non positive semi-definite matrix' }

	export interface AssetsCovarianceMatrixPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		AssetsCovarianceMatrixPostPostBodyAssets: Array<AssetsCovarianceMatrixPostPostBodyAssets>;
	}
	export interface AssetsCovarianceMatrixPostPostBodyFormProperties {
	}
	export function CreateAssetsCovarianceMatrixPostPostBodyFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixPostPostBodyFormProperties>({
		});

	}

	export interface AssetsCovarianceMatrixPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsCovarianceMatrixPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsCovarianceMatrixPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsCovarianceMatrixPostReturn {

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;
	}
	export interface AssetsCovarianceMatrixPostReturnFormProperties {
	}
	export function CreateAssetsCovarianceMatrixPostReturnFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixPostReturnFormProperties>({
		});

	}

	export interface AssetsCovarianceMatrixEffective_rankPostReturn {

		/**
		 * The effective rank of the asset covariance matrix
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrixEffectiveRank: Array<string>;
	}
	export interface AssetsCovarianceMatrixEffective_rankPostReturnFormProperties {
	}
	export function CreateAssetsCovarianceMatrixEffective_rankPostReturnFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixEffective_rankPostReturnFormProperties>({
		});

	}

	export interface AssetsCovarianceMatrixExponentially_weightedPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		AssetsCovarianceMatrixExponentially_weightedPostPostBodyAssets: Array<AssetsCovarianceMatrixExponentially_weightedPostPostBodyAssets>;

		/**
		 * The exponential decay factor
		 * Minimum: 0
		 * Maximum: 1
		 */
		decayFactor?: number | null;
	}
	export interface AssetsCovarianceMatrixExponentially_weightedPostPostBodyFormProperties {

		/**
		 * The exponential decay factor
		 * Minimum: 0
		 * Maximum: 1
		 */
		decayFactor: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCovarianceMatrixExponentially_weightedPostPostBodyFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixExponentially_weightedPostPostBodyFormProperties>({
			decayFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface AssetsCovarianceMatrixExponentially_weightedPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsCovarianceMatrixExponentially_weightedPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsCovarianceMatrixExponentially_weightedPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixExponentially_weightedPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsCovarianceMatrixExponentially_weightedPostReturn {

		/**
		 * assetsCovarianceMatrix[i][j] is the sample covariance between the asset i returns and the asset j returns
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;
	}
	export interface AssetsCovarianceMatrixExponentially_weightedPostReturnFormProperties {
	}
	export function CreateAssetsCovarianceMatrixExponentially_weightedPostReturnFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixExponentially_weightedPostReturnFormProperties>({
		});

	}

	export interface AssetsCovarianceMatrixValidationPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;
	}
	export interface AssetsCovarianceMatrixValidationPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreateAssetsCovarianceMatrixValidationPostPostBodyFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixValidationPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface AssetsCovarianceMatrixValidationPostReturn {

		/**
		 * Indicates whether the matrix is a valid covariance matrix
		 * Required
		 */
		message: AssetsCovarianceMatrixValidationPostReturnMessage;
	}
	export interface AssetsCovarianceMatrixValidationPostReturnFormProperties {

		/**
		 * Indicates whether the matrix is a valid covariance matrix
		 * Required
		 */
		message: FormControl<AssetsCovarianceMatrixValidationPostReturnMessage | null | undefined>,
	}
	export function CreateAssetsCovarianceMatrixValidationPostReturnFormGroup() {
		return new FormGroup<AssetsCovarianceMatrixValidationPostReturnFormProperties>({
			message: new FormControl<AssetsCovarianceMatrixValidationPostReturnMessage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssetsCovarianceMatrixValidationPostReturnMessage { 'valid covariance matrix' = 'valid covariance matrix', 'invalid covariance matrix - non symmetric matrix' = 'invalid covariance matrix - non symmetric matrix', 'invalid covariance matrix - non positive diagonal elements' = 'invalid covariance matrix - non positive diagonal elements', 'invalid covariance matrix - non positive semi-definite matrix' = 'invalid covariance matrix - non positive semi-definite matrix' }

	export interface AssetsKurtosisPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsKurtosisPostPostBodyAssets: Array<AssetsKurtosisPostPostBodyAssets>;
	}
	export interface AssetsKurtosisPostPostBodyFormProperties {
	}
	export function CreateAssetsKurtosisPostPostBodyFormGroup() {
		return new FormGroup<AssetsKurtosisPostPostBodyFormProperties>({
		});

	}

	export interface AssetsKurtosisPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t
		 * Required
		 * Minimum items: 4
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsKurtosisPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsKurtosisPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsKurtosisPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsKurtosisPostReturn {

		/** Required */
		AssetsKurtosisPostReturnAssets: Array<AssetsKurtosisPostReturnAssets>;
	}
	export interface AssetsKurtosisPostReturnFormProperties {
	}
	export function CreateAssetsKurtosisPostReturnFormGroup() {
		return new FormGroup<AssetsKurtosisPostReturnFormProperties>({
		});

	}

	export interface AssetsKurtosisPostReturnAssets {

		/**
		 * The kurtosis of the asset
		 * Required
		 * Type: double
		 */
		assetKurtosis: number;
	}
	export interface AssetsKurtosisPostReturnAssetsFormProperties {

		/**
		 * The kurtosis of the asset
		 * Required
		 * Type: double
		 */
		assetKurtosis: FormControl<number | null | undefined>,
	}
	export function CreateAssetsKurtosisPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsKurtosisPostReturnAssetsFormProperties>({
			assetKurtosis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsPricesAdjustedPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsPricesAdjustedPostPostBodyAssets: Array<AssetsPricesAdjustedPostPostBodyAssets>;
	}
	export interface AssetsPricesAdjustedPostPostBodyFormProperties {
	}
	export function CreateAssetsPricesAdjustedPostPostBodyFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostPostBodyFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedPostPostBodyAssets {

		/** assetDividends[t] contains dividend information for the asset at the date t */
		AssetsPricesAdjustedPostPostBodyAssetsAssetDividends?: Array<AssetsPricesAdjustedPostPostBodyAssetsAssetDividends>;

		/**
		 * assetPrices[t] contains price information for the asset at the date t
		 * Required
		 * Minimum items: 1
		 */
		AssetsPricesAdjustedPostPostBodyAssetsAssetPrices: Array<AssetsPricesAdjustedPostPostBodyAssetsAssetPrices>;

		/** assetSplits[t] contains split information for the asset at the date t */
		AssetsPricesAdjustedPostPostBodyAssetsAssetSplits?: Array<AssetsPricesAdjustedPostPostBodyAssetsAssetSplits>;
	}
	export interface AssetsPricesAdjustedPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsPricesAdjustedPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedPostPostBodyAssetsAssetDividends {

		/**
		 * The dividend amount distributed by the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		amount: number;

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: string;
	}
	export interface AssetsPricesAdjustedPostPostBodyAssetsAssetDividendsFormProperties {

		/**
		 * The dividend amount distributed by the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: FormControl<string | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedPostPostBodyAssetsAssetDividendsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostPostBodyAssetsAssetDividendsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsPricesAdjustedPostPostBodyAssetsAssetPrices {

		/**
		 * The unadjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		close: number;

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: string;
	}
	export interface AssetsPricesAdjustedPostPostBodyAssetsAssetPricesFormProperties {

		/**
		 * The unadjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		close: FormControl<number | null | undefined>,

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: FormControl<string | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedPostPostBodyAssetsAssetPricesFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostPostBodyAssetsAssetPricesFormProperties>({
			close: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsPricesAdjustedPostPostBodyAssetsAssetSplits {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: string;

		/**
		 * The split factor of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		factor: number;
	}
	export interface AssetsPricesAdjustedPostPostBodyAssetsAssetSplitsFormProperties {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The split factor of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		factor: FormControl<number | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedPostPostBodyAssetsAssetSplitsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostPostBodyAssetsAssetSplitsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			factor: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface AssetsPricesAdjustedPostReturn {

		/** Required */
		AssetsPricesAdjustedPostReturnAssets: Array<AssetsPricesAdjustedPostReturnAssets>;
	}
	export interface AssetsPricesAdjustedPostReturnFormProperties {
	}
	export function CreateAssetsPricesAdjustedPostReturnFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostReturnFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedPostReturnAssets {

		/**
		 * assetAdjustedPrices[t] contains adjusted price information for the asset at the date t
		 * Required
		 * Minimum items: 1
		 */
		AssetsPricesAdjustedPostReturnAssetsAssetAdjustedPrices: Array<AssetsPricesAdjustedPostReturnAssetsAssetAdjustedPrices>;
	}
	export interface AssetsPricesAdjustedPostReturnAssetsFormProperties {
	}
	export function CreateAssetsPricesAdjustedPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostReturnAssetsFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedPostReturnAssetsAssetAdjustedPrices {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: string;

		/**
		 * The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided
		 * Minimum: 0
		 */
		dividendAdjustedClose?: number | null;

		/**
		 * The dividend(s) and split(s) adjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		fullyAdjustedClose: number;

		/**
		 * The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided
		 * Minimum: 0
		 */
		splitAdjustedClose?: number | null;
	}
	export interface AssetsPricesAdjustedPostReturnAssetsAssetAdjustedPricesFormProperties {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided
		 * Minimum: 0
		 */
		dividendAdjustedClose: FormControl<number | null | undefined>,

		/**
		 * The dividend(s) and split(s) adjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		fullyAdjustedClose: FormControl<number | null | undefined>,

		/**
		 * The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided
		 * Minimum: 0
		 */
		splitAdjustedClose: FormControl<number | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedPostReturnAssetsAssetAdjustedPricesFormGroup() {
		return new FormGroup<AssetsPricesAdjustedPostReturnAssetsAssetAdjustedPricesFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dividendAdjustedClose: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			fullyAdjustedClose: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			splitAdjustedClose: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface AssetsPricesAdjustedForwardPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsPricesAdjustedForwardPostPostBodyAssets: Array<AssetsPricesAdjustedForwardPostPostBodyAssets>;
	}
	export interface AssetsPricesAdjustedForwardPostPostBodyFormProperties {
	}
	export function CreateAssetsPricesAdjustedForwardPostPostBodyFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostPostBodyFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedForwardPostPostBodyAssets {

		/** assetDividends[t] contains dividend information for the asset at the date t */
		AssetsPricesAdjustedForwardPostPostBodyAssetsAssetDividends?: Array<AssetsPricesAdjustedForwardPostPostBodyAssetsAssetDividends>;

		/**
		 * assetPrices[t] contains price information for the asset at the date t
		 * Required
		 * Minimum items: 1
		 */
		AssetsPricesAdjustedForwardPostPostBodyAssetsAssetPrices: Array<AssetsPricesAdjustedForwardPostPostBodyAssetsAssetPrices>;

		/** assetSplits[t] contains split information for the asset at the date t */
		AssetsPricesAdjustedForwardPostPostBodyAssetsAssetSplits?: Array<AssetsPricesAdjustedForwardPostPostBodyAssetsAssetSplits>;
	}
	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsPricesAdjustedForwardPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsAssetDividends {

		/**
		 * The dividend amount distributed by the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		amount: number;

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: string;
	}
	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsAssetDividendsFormProperties {

		/**
		 * The dividend amount distributed by the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: FormControl<string | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedForwardPostPostBodyAssetsAssetDividendsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostPostBodyAssetsAssetDividendsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsAssetPrices {

		/**
		 * The unadjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		close: number;

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: string;
	}
	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsAssetPricesFormProperties {

		/**
		 * The unadjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		close: FormControl<number | null | undefined>,

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: FormControl<string | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedForwardPostPostBodyAssetsAssetPricesFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostPostBodyAssetsAssetPricesFormProperties>({
			close: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsAssetSplits {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: string;

		/**
		 * The split factor of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		factor: number;
	}
	export interface AssetsPricesAdjustedForwardPostPostBodyAssetsAssetSplitsFormProperties {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The split factor of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		factor: FormControl<number | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedForwardPostPostBodyAssetsAssetSplitsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostPostBodyAssetsAssetSplitsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			factor: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface AssetsPricesAdjustedForwardPostReturn {

		/** Required */
		AssetsPricesAdjustedForwardPostReturnAssets: Array<AssetsPricesAdjustedForwardPostReturnAssets>;
	}
	export interface AssetsPricesAdjustedForwardPostReturnFormProperties {
	}
	export function CreateAssetsPricesAdjustedForwardPostReturnFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostReturnFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedForwardPostReturnAssets {

		/**
		 * assetAdjustedPrices[t] contains adjusted price information for the asset at the date t
		 * Required
		 * Minimum items: 1
		 */
		AssetsPricesAdjustedForwardPostReturnAssetsAssetAdjustedPrices: Array<AssetsPricesAdjustedForwardPostReturnAssetsAssetAdjustedPrices>;
	}
	export interface AssetsPricesAdjustedForwardPostReturnAssetsFormProperties {
	}
	export function CreateAssetsPricesAdjustedForwardPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostReturnAssetsFormProperties>({
		});

	}

	export interface AssetsPricesAdjustedForwardPostReturnAssetsAssetAdjustedPrices {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: string;

		/**
		 * The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided
		 * Minimum: 0
		 */
		dividendAdjustedClose?: number | null;

		/**
		 * The dividend(s) and split(s) adjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		fullyAdjustedClose: number;

		/**
		 * The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided
		 * Minimum: 0
		 */
		splitAdjustedClose?: number | null;
	}
	export interface AssetsPricesAdjustedForwardPostReturnAssetsAssetAdjustedPricesFormProperties {

		/**
		 * The date corresponding to the date t in format YYYY-MM-DD
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided
		 * Minimum: 0
		 */
		dividendAdjustedClose: FormControl<number | null | undefined>,

		/**
		 * The dividend(s) and split(s) adjusted close price of the asset at the date t
		 * Required
		 * Minimum: 0
		 */
		fullyAdjustedClose: FormControl<number | null | undefined>,

		/**
		 * The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided
		 * Minimum: 0
		 */
		splitAdjustedClose: FormControl<number | null | undefined>,
	}
	export function CreateAssetsPricesAdjustedForwardPostReturnAssetsAssetAdjustedPricesFormGroup() {
		return new FormGroup<AssetsPricesAdjustedForwardPostReturnAssetsAssetAdjustedPricesFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dividendAdjustedClose: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			fullyAdjustedClose: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			splitAdjustedClose: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface AssetsReturnsPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsReturnsPostPostBodyAssets: Array<AssetsReturnsPostPostBodyAssets>;
	}
	export interface AssetsReturnsPostPostBodyFormProperties {
	}
	export function CreateAssetsReturnsPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsPostPostBodyFormProperties>({
		});

	}

	export interface AssetsReturnsPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface AssetsReturnsPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsReturnsPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsReturnsPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsPostReturn {

		/** Required */
		AssetsReturnsPostReturnAssets: Array<AssetsReturnsPostReturnAssets>;
	}
	export interface AssetsReturnsPostReturnFormProperties {
	}
	export function CreateAssetsReturnsPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsPostReturnAssets {

		/**
		 * assetReturns[t] is the arithmetic return of the asset from the time t-1 to the time t, in percentage
		 * Required
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsPostReturnAssetsFormProperties {
	}
	export function CreateAssetsReturnsPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsReturnsPostReturnAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsAveragePostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsReturnsAveragePostPostBodyAssets: Array<AssetsReturnsAveragePostPostBodyAssets>;
	}
	export interface AssetsReturnsAveragePostPostBodyFormProperties {
	}
	export function CreateAssetsReturnsAveragePostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsAveragePostPostBodyFormProperties>({
		});

	}

	export interface AssetsReturnsAveragePostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t
		 * Required
		 * Minimum items: 1
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsAveragePostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsReturnsAveragePostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsReturnsAveragePostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsAveragePostReturn {

		/** Required */
		AssetsReturnsAveragePostReturnAssets: Array<AssetsReturnsAveragePostReturnAssets>;
	}
	export interface AssetsReturnsAveragePostReturnFormProperties {
	}
	export function CreateAssetsReturnsAveragePostReturnFormGroup() {
		return new FormGroup<AssetsReturnsAveragePostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsAveragePostReturnAssets {

		/**
		 * The arithmetic average return of the asset
		 * Required
		 * Type: double
		 */
		assetAverageReturn: number;
	}
	export interface AssetsReturnsAveragePostReturnAssetsFormProperties {

		/**
		 * The arithmetic average return of the asset
		 * Required
		 * Type: double
		 */
		assetAverageReturn: FormControl<number | null | undefined>,
	}
	export function CreateAssetsReturnsAveragePostReturnAssetsFormGroup() {
		return new FormGroup<AssetsReturnsAveragePostReturnAssetsFormProperties>({
			assetAverageReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsReturnsLogarithmicPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsReturnsLogarithmicPostPostBodyAssets: Array<AssetsReturnsLogarithmicPostPostBodyAssets>;
	}
	export interface AssetsReturnsLogarithmicPostPostBodyFormProperties {
	}
	export function CreateAssetsReturnsLogarithmicPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsLogarithmicPostPostBodyFormProperties>({
		});

	}

	export interface AssetsReturnsLogarithmicPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface AssetsReturnsLogarithmicPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsReturnsLogarithmicPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsReturnsLogarithmicPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsLogarithmicPostReturn {

		/** Required */
		AssetsReturnsLogarithmicPostReturnAssets: Array<AssetsReturnsLogarithmicPostReturnAssets>;
	}
	export interface AssetsReturnsLogarithmicPostReturnFormProperties {
	}
	export function CreateAssetsReturnsLogarithmicPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsLogarithmicPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsLogarithmicPostReturnAssets {

		/**
		 * assetReturns[t] is the logarithmic return of the asset from the time t-1 to the time t, in percentage
		 * Required
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsLogarithmicPostReturnAssetsFormProperties {
	}
	export function CreateAssetsReturnsLogarithmicPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsReturnsLogarithmicPostReturnAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationBootstrapPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		AssetsReturnsSimulationBootstrapPostPostBodyAssets: Array<AssetsReturnsSimulationBootstrapPostPostBodyAssets>;

		/**
		 * The average length of the blocks to use in case the bootstrap method is 'stationaryBlock', in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3
		 * Minimum: 1
		 */
		bootstrapAverageBlockLength?: number | null;

		/**
		 * The length of the blocks to use in case the bootstrap method is 'circularBlock', in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3]
		 * Minimum: 2
		 */
		bootstrapBlockLength?: number | null;

		/** The bootstrap method to use */
		bootstrapMethod?: AssetsReturnsSimulationBootstrapPostPostBodyBootstrapMethod | null;

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations?: number | null;

		/**
		 * The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays
		 * Minimum: 1
		 */
		simulationsLength?: number | null;
	}
	export interface AssetsReturnsSimulationBootstrapPostPostBodyFormProperties {

		/**
		 * The average length of the blocks to use in case the bootstrap method is 'stationaryBlock', in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3
		 * Minimum: 1
		 */
		bootstrapAverageBlockLength: FormControl<number | null | undefined>,

		/**
		 * The length of the blocks to use in case the bootstrap method is 'circularBlock', in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3]
		 * Minimum: 2
		 */
		bootstrapBlockLength: FormControl<number | null | undefined>,

		/** The bootstrap method to use */
		bootstrapMethod: FormControl<AssetsReturnsSimulationBootstrapPostPostBodyBootstrapMethod | null | undefined>,

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations: FormControl<number | null | undefined>,

		/**
		 * The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays
		 * Minimum: 1
		 */
		simulationsLength: FormControl<number | null | undefined>,
	}
	export function CreateAssetsReturnsSimulationBootstrapPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsSimulationBootstrapPostPostBodyFormProperties>({
			bootstrapAverageBlockLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			bootstrapBlockLength: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
			bootstrapMethod: new FormControl<AssetsReturnsSimulationBootstrapPostPostBodyBootstrapMethod | null | undefined>(undefined),
			simulations: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			simulationsLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface AssetsReturnsSimulationBootstrapPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset over the time period t; all the assetReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsSimulationBootstrapPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsReturnsSimulationBootstrapPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationBootstrapPostPostBodyAssetsFormProperties>({
		});

	}

	export enum AssetsReturnsSimulationBootstrapPostPostBodyBootstrapMethod { iid = 'iid', circularBlock = 'circularBlock', stationaryBlock = 'stationaryBlock' }

	export interface AssetsReturnsSimulationBootstrapPostReturn {

		/** Required */
		AssetsReturnsSimulationBootstrapPostReturnSimulations: Array<AssetsReturnsSimulationBootstrapPostReturnSimulations>;
	}
	export interface AssetsReturnsSimulationBootstrapPostReturnFormProperties {
	}
	export function CreateAssetsReturnsSimulationBootstrapPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsSimulationBootstrapPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationBootstrapPostReturnSimulations {

		/**
		 * assets[i] is the data for the i-th asset
		 * Required
		 */
		AssetsReturnsSimulationBootstrapPostReturnSimulationsAssets: Array<AssetsReturnsSimulationBootstrapPostReturnSimulationsAssets>;
	}
	export interface AssetsReturnsSimulationBootstrapPostReturnSimulationsFormProperties {
	}
	export function CreateAssetsReturnsSimulationBootstrapPostReturnSimulationsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationBootstrapPostReturnSimulationsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationBootstrapPostReturnSimulationsAssets {

		/**
		 * assetReturns[t] is the simulated return of the i-th asset for the t-th time period
		 * Required
		 * Minimum items: 1
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsSimulationBootstrapPostReturnSimulationsAssetsFormProperties {
	}
	export function CreateAssetsReturnsSimulationBootstrapPostReturnSimulationsAssetsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationBootstrapPostReturnSimulationsAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostPostBody {

		/**
		 * The mean parameter of the Cornish-Fisher distribution, corresponding to the arithmetic average return of the asset
		 * Required
		 * Type: double
		 */
		assetAverageReturnParameter: number;

		/**
		 * The (excess) kurtosis parameter of the Cornish-Fisher distribution, corresponding approximately to the (excess) kurtosis of the asset returns
		 * Required
		 * Type: double
		 */
		assetKurtosisParameter: number;

		/**
		 * The skewness parameter of the Cornish-Fisher distribution, corresponding approximately to the skewness of the asset returns
		 * Required
		 * Type: double
		 */
		assetSkewnessParameter: number;

		/**
		 * The volatility parameter of the Cornish-Fisher distribution, corresponding approximately to the volatility of the asset returns
		 * Required
		 * Minimum: 0
		 */
		assetVolatilityParameter: number;

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations?: number | null;

		/**
		 * The number of time period(s) to simulate per simulation
		 * Minimum: 1
		 */
		simulationsLength?: number | null;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostPostBodyFormProperties {

		/**
		 * The mean parameter of the Cornish-Fisher distribution, corresponding to the arithmetic average return of the asset
		 * Required
		 * Type: double
		 */
		assetAverageReturnParameter: FormControl<number | null | undefined>,

		/**
		 * The (excess) kurtosis parameter of the Cornish-Fisher distribution, corresponding approximately to the (excess) kurtosis of the asset returns
		 * Required
		 * Type: double
		 */
		assetKurtosisParameter: FormControl<number | null | undefined>,

		/**
		 * The skewness parameter of the Cornish-Fisher distribution, corresponding approximately to the skewness of the asset returns
		 * Required
		 * Type: double
		 */
		assetSkewnessParameter: FormControl<number | null | undefined>,

		/**
		 * The volatility parameter of the Cornish-Fisher distribution, corresponding approximately to the volatility of the asset returns
		 * Required
		 * Minimum: 0
		 */
		assetVolatilityParameter: FormControl<number | null | undefined>,

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations: FormControl<number | null | undefined>,

		/**
		 * The number of time period(s) to simulate per simulation
		 * Minimum: 1
		 */
		simulationsLength: FormControl<number | null | undefined>,
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherPostPostBodyFormProperties>({
			assetAverageReturnParameter: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetKurtosisParameter: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetSkewnessParameter: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetVolatilityParameter: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			simulations: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			simulationsLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostReturn {

		/** Required */
		AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulations: Array<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulations>;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulations {

		/**
		 * assets[i] is the data for the i-th asset
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsAssets: Array<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsAssets>;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsAssets {

		/**
		 * assetReturns[t] is the simulated return of the i-th asset for the t-th time period
		 * Required
		 * Minimum items: 1
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsAssetsFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsAssetsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherPostReturnSimulationsAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostPostBody {

		/**
		 * The arithmetic average return of the asset, corresponding to the mean of the corrected Cornish-Fisher distribution
		 * Required
		 * Type: double
		 */
		assetAverageReturn: number;

		/**
		 * The kurtosis of the asset returns, corresponding to the kurtosis of the Cornish-Fisher distribution
		 * Required
		 * Type: double
		 */
		assetKurtosis: number;

		/**
		 * The skewness of the asset returns, corresponding to the skewness of the Cornish-Fisher distribution
		 * Required
		 * Type: double
		 */
		assetSkewness: number;

		/**
		 * The volatility of the asset returns, corresponding to the volatility of the Cornish-Fisher distribution
		 * Required
		 * Minimum: 0
		 */
		assetVolatility: number;

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations?: number | null;

		/**
		 * The number of time period(s) to simulate per simulation
		 * Minimum: 1
		 */
		simulationsLength?: number | null;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostPostBodyFormProperties {

		/**
		 * The arithmetic average return of the asset, corresponding to the mean of the corrected Cornish-Fisher distribution
		 * Required
		 * Type: double
		 */
		assetAverageReturn: FormControl<number | null | undefined>,

		/**
		 * The kurtosis of the asset returns, corresponding to the kurtosis of the Cornish-Fisher distribution
		 * Required
		 * Type: double
		 */
		assetKurtosis: FormControl<number | null | undefined>,

		/**
		 * The skewness of the asset returns, corresponding to the skewness of the Cornish-Fisher distribution
		 * Required
		 * Type: double
		 */
		assetSkewness: FormControl<number | null | undefined>,

		/**
		 * The volatility of the asset returns, corresponding to the volatility of the Cornish-Fisher distribution
		 * Required
		 * Minimum: 0
		 */
		assetVolatility: FormControl<number | null | undefined>,

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations: FormControl<number | null | undefined>,

		/**
		 * The number of time period(s) to simulate per simulation
		 * Minimum: 1
		 */
		simulationsLength: FormControl<number | null | undefined>,
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostPostBodyFormProperties>({
			assetAverageReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetKurtosis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetSkewness: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetVolatility: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			simulations: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			simulationsLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturn {

		/** Required */
		AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulations: Array<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulations>;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulations {

		/**
		 * assets[i] is the data for the i-th asset
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsAssets: Array<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsAssets>;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsAssets {

		/**
		 * assetReturns[t] is the simulated return of the i-th asset for the t-th time period
		 * Required
		 * Minimum items: 1
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsAssetsFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsAssetsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloCornish_fisherCorrectedPostReturnSimulationsAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloGaussianPostPostBody {

		/**
		 * The arithmetic average return of the asset, corresponding to the mean of the Gaussian distribution
		 * Required
		 * Type: double
		 */
		assetAverageReturn: number;

		/**
		 * The volatility of the asset returns, corresponding to the standard deviation of the Gaussian distribution
		 * Required
		 * Minimum: 0
		 */
		assetVolatility: number;

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations?: number | null;

		/**
		 * The number of time period(s) to simulate per simulation
		 * Minimum: 1
		 */
		simulationsLength?: number | null;
	}
	export interface AssetsReturnsSimulationMonte_carloGaussianPostPostBodyFormProperties {

		/**
		 * The arithmetic average return of the asset, corresponding to the mean of the Gaussian distribution
		 * Required
		 * Type: double
		 */
		assetAverageReturn: FormControl<number | null | undefined>,

		/**
		 * The volatility of the asset returns, corresponding to the standard deviation of the Gaussian distribution
		 * Required
		 * Minimum: 0
		 */
		assetVolatility: FormControl<number | null | undefined>,

		/**
		 * The number of simulations to perform
		 * Minimum: 1
		 */
		simulations: FormControl<number | null | undefined>,

		/**
		 * The number of time period(s) to simulate per simulation
		 * Minimum: 1
		 */
		simulationsLength: FormControl<number | null | undefined>,
	}
	export function CreateAssetsReturnsSimulationMonte_carloGaussianPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloGaussianPostPostBodyFormProperties>({
			assetAverageReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assetVolatility: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			simulations: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			simulationsLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface AssetsReturnsSimulationMonte_carloGaussianPostReturn {

		/** Required */
		AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulations: Array<AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulations>;
	}
	export interface AssetsReturnsSimulationMonte_carloGaussianPostReturnFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloGaussianPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloGaussianPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulations {

		/**
		 * assets[i] is the data for the i-th asset
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsAssets: Array<AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsAssets>;
	}
	export interface AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsFormProperties>({
		});

	}

	export interface AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsAssets {

		/**
		 * assetReturns[t] is the simulated return of the i-th asset for the t-th time period
		 * Required
		 * Minimum items: 1
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsAssetsFormProperties {
	}
	export function CreateAssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsAssetsFormGroup() {
		return new FormGroup<AssetsReturnsSimulationMonte_carloGaussianPostReturnSimulationsAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsTurbulence_partitionedPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsReturnsTurbulence_partitionedPostPostBodyAssets: Array<AssetsReturnsTurbulence_partitionedPostPostBodyAssets>;

		/**
		 * The turbulence threshold(s), in percentage; in case several turbulence thresholds are provided, they must be provided in increasing order
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		turbulenceThresholds: Array<number>;

		/** The method to use to convert the turbulence threshold(s) into turbulence score(s) */
		turbulenceThresholdsConversionMethod?: AssetsReturnsTurbulence_partitionedPostPostBodyTurbulenceThresholdsConversionMethod | null;
	}
	export interface AssetsReturnsTurbulence_partitionedPostPostBodyFormProperties {

		/** The method to use to convert the turbulence threshold(s) into turbulence score(s) */
		turbulenceThresholdsConversionMethod: FormControl<AssetsReturnsTurbulence_partitionedPostPostBodyTurbulenceThresholdsConversionMethod | null | undefined>,
	}
	export function CreateAssetsReturnsTurbulence_partitionedPostPostBodyFormGroup() {
		return new FormGroup<AssetsReturnsTurbulence_partitionedPostPostBodyFormProperties>({
			turbulenceThresholdsConversionMethod: new FormControl<AssetsReturnsTurbulence_partitionedPostPostBodyTurbulenceThresholdsConversionMethod | null | undefined>(undefined),
		});

	}

	export interface AssetsReturnsTurbulence_partitionedPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsTurbulence_partitionedPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsReturnsTurbulence_partitionedPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsReturnsTurbulence_partitionedPostPostBodyAssetsFormProperties>({
		});

	}

	export enum AssetsReturnsTurbulence_partitionedPostPostBodyTurbulenceThresholdsConversionMethod { empiricalQuantileDistribution = 'empiricalQuantileDistribution', chisquareInverseDistribution = 'chisquareInverseDistribution' }

	export interface AssetsReturnsTurbulence_partitionedPostReturn {

		/** Required */
		AssetsReturnsTurbulence_partitionedPostReturnAssets: Array<AssetsReturnsTurbulence_partitionedPostReturnAssets>;
	}
	export interface AssetsReturnsTurbulence_partitionedPostReturnFormProperties {
	}
	export function CreateAssetsReturnsTurbulence_partitionedPostReturnFormGroup() {
		return new FormGroup<AssetsReturnsTurbulence_partitionedPostReturnFormProperties>({
		});

	}

	export interface AssetsReturnsTurbulence_partitionedPostReturnAssets {

		/**
		 * assetTurbulencePartitionedReturns[k] corresponds to all the asset returns whose turbulence index is lower than or equal to the turbulence score associated with the turbulence threshold turbulenceThresholds[k]; the length of the array assetTurbulencePartitionedReturns is equal to the length of the array turbulenceThresholds plus 1
		 * Required
		 * Minimum items: 2
		 * Maximum items: 4
		 */
		AssetsReturnsTurbulence_partitionedPostReturnAssetsAssetTurbulencePartitionedReturns: Array<AssetsReturnsTurbulence_partitionedPostReturnAssetsAssetTurbulencePartitionedReturns>;
	}
	export interface AssetsReturnsTurbulence_partitionedPostReturnAssetsFormProperties {
	}
	export function CreateAssetsReturnsTurbulence_partitionedPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsReturnsTurbulence_partitionedPostReturnAssetsFormProperties>({
		});

	}

	export interface AssetsReturnsTurbulence_partitionedPostReturnAssetsAssetTurbulencePartitionedReturns {

		/**
		 * assetReturns[t] is the return of the asset at a time t; the array assetReturns is possibly empty in case no asset returns have a turbulence index lower than or equal to the turbulence score associated with the turbulence threshold turbulenceThresholds[k]
		 * Required
		 * Minimum items: 0
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsReturnsTurbulence_partitionedPostReturnAssetsAssetTurbulencePartitionedReturnsFormProperties {
	}
	export function CreateAssetsReturnsTurbulence_partitionedPostReturnAssetsAssetTurbulencePartitionedReturnsFormGroup() {
		return new FormGroup<AssetsReturnsTurbulence_partitionedPostReturnAssetsAssetTurbulencePartitionedReturnsFormProperties>({
		});

	}

	export interface AssetsSkewnessPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsSkewnessPostPostBodyAssets: Array<AssetsSkewnessPostPostBodyAssets>;
	}
	export interface AssetsSkewnessPostPostBodyFormProperties {
	}
	export function CreateAssetsSkewnessPostPostBodyFormGroup() {
		return new FormGroup<AssetsSkewnessPostPostBodyFormProperties>({
		});

	}

	export interface AssetsSkewnessPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t
		 * Required
		 * Minimum items: 3
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsSkewnessPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsSkewnessPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsSkewnessPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsSkewnessPostReturn {

		/** Required */
		AssetsSkewnessPostReturnAssets: Array<AssetsSkewnessPostReturnAssets>;
	}
	export interface AssetsSkewnessPostReturnFormProperties {
	}
	export function CreateAssetsSkewnessPostReturnFormGroup() {
		return new FormGroup<AssetsSkewnessPostReturnFormProperties>({
		});

	}

	export interface AssetsSkewnessPostReturnAssets {

		/**
		 * The skewness of the asset
		 * Required
		 * Type: double
		 */
		assetSkewness: number;
	}
	export interface AssetsSkewnessPostReturnAssetsFormProperties {

		/**
		 * The skewness of the asset
		 * Required
		 * Type: double
		 */
		assetSkewness: FormControl<number | null | undefined>,
	}
	export function CreateAssetsSkewnessPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsSkewnessPostReturnAssetsFormProperties>({
			assetSkewness: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsVariancePostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsVariancePostPostBodyAssets: Array<AssetsVariancePostPostBodyAssets>;
	}
	export interface AssetsVariancePostPostBodyFormProperties {
	}
	export function CreateAssetsVariancePostPostBodyFormGroup() {
		return new FormGroup<AssetsVariancePostPostBodyFormProperties>({
		});

	}

	export interface AssetsVariancePostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsVariancePostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsVariancePostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsVariancePostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsVariancePostReturn {

		/** Required */
		AssetsVariancePostReturnAssets: Array<AssetsVariancePostReturnAssets>;
	}
	export interface AssetsVariancePostReturnFormProperties {
	}
	export function CreateAssetsVariancePostReturnFormGroup() {
		return new FormGroup<AssetsVariancePostReturnFormProperties>({
		});

	}

	export interface AssetsVariancePostReturnAssets {

		/**
		 * The variance of the asset
		 * Required
		 * Minimum: 0
		 */
		assetVariance: number;
	}
	export interface AssetsVariancePostReturnAssetsFormProperties {

		/**
		 * The variance of the asset
		 * Required
		 * Minimum: 0
		 */
		assetVariance: FormControl<number | null | undefined>,
	}
	export function CreateAssetsVariancePostReturnAssetsFormGroup() {
		return new FormGroup<AssetsVariancePostReturnAssetsFormProperties>({
			assetVariance: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface AssetsVolatilityPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		AssetsVolatilityPostPostBodyAssets: Array<AssetsVolatilityPostPostBodyAssets>;
	}
	export interface AssetsVolatilityPostPostBodyFormProperties {
	}
	export function CreateAssetsVolatilityPostPostBodyFormGroup() {
		return new FormGroup<AssetsVolatilityPostPostBodyFormProperties>({
		});

	}

	export interface AssetsVolatilityPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface AssetsVolatilityPostPostBodyAssetsFormProperties {
	}
	export function CreateAssetsVolatilityPostPostBodyAssetsFormGroup() {
		return new FormGroup<AssetsVolatilityPostPostBodyAssetsFormProperties>({
		});

	}

	export interface AssetsVolatilityPostReturn {

		/** Required */
		AssetsVolatilityPostReturnAssets: Array<AssetsVolatilityPostReturnAssets>;
	}
	export interface AssetsVolatilityPostReturnFormProperties {
	}
	export function CreateAssetsVolatilityPostReturnFormGroup() {
		return new FormGroup<AssetsVolatilityPostReturnFormProperties>({
		});

	}

	export interface AssetsVolatilityPostReturnAssets {

		/**
		 * The volatility of the asset
		 * Required
		 * Minimum: 0
		 */
		assetVolatility: number;
	}
	export interface AssetsVolatilityPostReturnAssetsFormProperties {

		/**
		 * The volatility of the asset
		 * Required
		 * Minimum: 0
		 */
		assetVolatility: FormControl<number | null | undefined>,
	}
	export function CreateAssetsVolatilityPostReturnAssetsFormGroup() {
		return new FormGroup<AssetsVolatilityPostReturnAssetsFormProperties>({
			assetVolatility: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface FactorsResidualizationPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		FactorsResidualizationPostPostBodyFactors: Array<FactorsResidualizationPostPostBodyFactors>;

		/**
		 * The index of the factor to residualize
		 * Required
		 * Minimum: 1
		 */
		residualizedFactor: number;
	}
	export interface FactorsResidualizationPostPostBodyFormProperties {

		/**
		 * The index of the factor to residualize
		 * Required
		 * Minimum: 1
		 */
		residualizedFactor: FormControl<number | null | undefined>,
	}
	export function CreateFactorsResidualizationPostPostBodyFormGroup() {
		return new FormGroup<FactorsResidualizationPostPostBodyFormProperties>({
			residualizedFactor: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface FactorsResidualizationPostPostBodyFactors {

		/**
		 * factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		factorReturns: Array<number>;
	}
	export interface FactorsResidualizationPostPostBodyFactorsFormProperties {
	}
	export function CreateFactorsResidualizationPostPostBodyFactorsFormGroup() {
		return new FormGroup<FactorsResidualizationPostPostBodyFactorsFormProperties>({
		});

	}

	export interface FactorsResidualizationPostReturn {

		/**
		 * residualizedFactorReturns[t] is the return of the residualized factor at the time t
		 * Required
		 */
		residualizedFactorReturns: Array<number>;
	}
	export interface FactorsResidualizationPostReturnFormProperties {
	}
	export function CreateFactorsResidualizationPostReturnFormGroup() {
		return new FormGroup<FactorsResidualizationPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisAlphaPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisAlphaPostReturnPortfolios: Array<PortfolioAnalysisAlphaPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisAlphaPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisAlphaPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisAlphaPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisAlphaPostReturnPortfolios {

		/**
		 * The portfolio Jensen's alpha, which correponds to the portfolio excess return adjusted for the systematic risk in the Capital Asset Pricing Model (CAPM)
		 * Required
		 * Type: double
		 */
		portfolioAlpha: number;
	}
	export interface PortfolioAnalysisAlphaPostReturnPortfoliosFormProperties {

		/**
		 * The portfolio Jensen's alpha, which correponds to the portfolio excess return adjusted for the systematic risk in the Capital Asset Pricing Model (CAPM)
		 * Required
		 * Type: double
		 */
		portfolioAlpha: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisAlphaPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisAlphaPostReturnPortfoliosFormProperties>({
			portfolioAlpha: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisBetaPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisBetaPostReturnPortfolios: Array<PortfolioAnalysisBetaPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisBetaPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisBetaPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisBetaPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisBetaPostReturnPortfolios {

		/**
		 * The portfolio beta, which correponds to the portfolio systematic risk in the Capital Asset Pricing Model (CAPM)
		 * Required
		 * Type: double
		 */
		portfolioBeta: number;
	}
	export interface PortfolioAnalysisBetaPostReturnPortfoliosFormProperties {

		/**
		 * The portfolio beta, which correponds to the portfolio systematic risk in the Capital Asset Pricing Model (CAPM)
		 * Required
		 * Type: double
		 */
		portfolioBeta: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisBetaPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisBetaPostReturnPortfoliosFormProperties>({
			portfolioBeta: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisContributionsReturnPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: number;

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisContributionsReturnPostPostBodyPortfolios: Array<PortfolioAnalysisContributionsReturnPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisContributionsReturnPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisContributionsReturnPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsReturnPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface PortfolioAnalysisContributionsReturnPostPostBodyPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 1
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioAnalysisContributionsReturnPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisContributionsReturnPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsReturnPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisContributionsReturnPostReturn {

		/** Required */
		PortfolioAnalysisContributionsReturnPostReturnPortfolios: Array<PortfolioAnalysisContributionsReturnPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisContributionsReturnPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisContributionsReturnPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsReturnPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisContributionsReturnPostReturnPortfolios {

		/**
		 * assetsGroupsReturnContributions[k] is the return contribution of the group of assets k to the return of the portfolio
		 * Minimum items: 1
		 */
		assetsGroupsReturnContributions?: Array<number>;

		/**
		 * assetsReturnContributions[i] is the return contribution of the asset i to the return of the portfolio
		 * Required
		 * Minimum items: 1
		 */
		assetsReturnContributions: Array<number>;
	}
	export interface PortfolioAnalysisContributionsReturnPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisContributionsReturnPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsReturnPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisContributionsRiskPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisContributionsRiskPostPostBodyPortfolios: Array<PortfolioAnalysisContributionsRiskPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisContributionsRiskPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisContributionsRiskPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsRiskPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface PortfolioAnalysisContributionsRiskPostPostBodyPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 1
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioAnalysisContributionsRiskPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisContributionsRiskPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsRiskPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisContributionsRiskPostReturn {

		/** Required */
		PortfolioAnalysisContributionsRiskPostReturnPortfolios: Array<PortfolioAnalysisContributionsRiskPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisContributionsRiskPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisContributionsRiskPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsRiskPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisContributionsRiskPostReturnPortfolios {

		/**
		 * assetsGroupsRiskContributions[k] is the risk contribution of the group of assets k to the risk of the portfolio
		 * Minimum items: 1
		 */
		assetsGroupsRiskContributions?: Array<number>;

		/**
		 * assetsRiskContributions[i] is the risk contribution of the asset i to the risk of the portfolio
		 * Required
		 * Minimum items: 1
		 */
		assetsRiskContributions: Array<number>;
	}
	export interface PortfolioAnalysisContributionsRiskPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisContributionsRiskPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisContributionsRiskPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisCorrelation_spectrumPostReturn {

		/** Required */
		PortfolioAnalysisCorrelation_spectrumPostReturnPortfolios: Array<PortfolioAnalysisCorrelation_spectrumPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisCorrelation_spectrumPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisCorrelation_spectrumPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisCorrelation_spectrumPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisCorrelation_spectrumPostReturnPortfolios {

		/**
		 * The correlation spectrum of the portfolio
		 * Required
		 * Minimum items: 2
		 */
		portfolioCorrelationSpectrum: Array<number>;
	}
	export interface PortfolioAnalysisCorrelation_spectrumPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisCorrelation_spectrumPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisCorrelation_spectrumPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisDiversification_ratioPostReturn {

		/** Required */
		PortfolioAnalysisDiversification_ratioPostReturnPortfolios: Array<PortfolioAnalysisDiversification_ratioPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisDiversification_ratioPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisDiversification_ratioPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisDiversification_ratioPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisDiversification_ratioPostReturnPortfolios {

		/**
		 * The diversification ratio of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioDiversificationRatio: number;
	}
	export interface PortfolioAnalysisDiversification_ratioPostReturnPortfoliosFormProperties {

		/**
		 * The diversification ratio of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioDiversificationRatio: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisDiversification_ratioPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisDiversification_ratioPostReturnPortfoliosFormProperties>({
			portfolioDiversificationRatio: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioAnalysisDrawdownsPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisDrawdownsPostPostBodyPortfolios: Array<PortfolioAnalysisDrawdownsPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisDrawdownsPostPostBodyFormProperties {
	}
	export function CreatePortfolioAnalysisDrawdownsPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisDrawdownsPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioAnalysisDrawdownsPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisDrawdownsPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisDrawdownsPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisDrawdownsPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisDrawdownsPostReturn {

		/** Required */
		PortfolioAnalysisDrawdownsPostReturnPortfolios: Array<PortfolioAnalysisDrawdownsPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisDrawdownsPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisDrawdownsPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisDrawdownsPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisDrawdownsPostReturnPortfolios {

		/**
		 * portfolioDrawdowns[t] is the value of the drawdown function at the time t
		 * Required
		 * Minimum items: 1
		 */
		portfolioDrawdowns: Array<number>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisDrawdownsPostReturnPortfoliosPortfolioWorstDrawdowns: Array<PortfolioAnalysisDrawdownsPostReturnPortfoliosPortfolioWorstDrawdowns>;
	}
	export interface PortfolioAnalysisDrawdownsPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisDrawdownsPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisDrawdownsPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisDrawdownsPostReturnPortfoliosPortfolioWorstDrawdowns {

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownBottom: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownDepth: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownEnd: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownStart: number;
	}
	export interface PortfolioAnalysisDrawdownsPostReturnPortfoliosPortfolioWorstDrawdownsFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownBottom: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownDepth: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownEnd: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		drawdownStart: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisDrawdownsPostReturnPortfoliosPortfolioWorstDrawdownsFormGroup() {
		return new FormGroup<PortfolioAnalysisDrawdownsPostReturnPortfoliosPortfolioWorstDrawdownsFormProperties>({
			drawdownBottom: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			drawdownDepth: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			drawdownEnd: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			drawdownStart: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioAnalysisEffective_number_of_betsPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/** The method used to extract the uncorrelated risk factors from the asset covariance matrix */
		factorsExtractionMethod?: PortfolioAnalysisEffective_number_of_betsPostPostBodyFactorsExtractionMethod | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisEffective_number_of_betsPostPostBodyPortfolios: Array<PortfolioAnalysisEffective_number_of_betsPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisEffective_number_of_betsPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/** The method used to extract the uncorrelated risk factors from the asset covariance matrix */
		factorsExtractionMethod: FormControl<PortfolioAnalysisEffective_number_of_betsPostPostBodyFactorsExtractionMethod | null | undefined>,
	}
	export function CreatePortfolioAnalysisEffective_number_of_betsPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisEffective_number_of_betsPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			factorsExtractionMethod: new FormControl<PortfolioAnalysisEffective_number_of_betsPostPostBodyFactorsExtractionMethod | null | undefined>(undefined),
		});

	}

	export enum PortfolioAnalysisEffective_number_of_betsPostPostBodyFactorsExtractionMethod { principalComponentAnalysis = 'principalComponentAnalysis', exactMinimumLinearTorsion = 'exactMinimumLinearTorsion', approximateMinimumLinearTorsion = 'approximateMinimumLinearTorsion' }

	export interface PortfolioAnalysisEffective_number_of_betsPostPostBodyPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioAnalysisEffective_number_of_betsPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisEffective_number_of_betsPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisEffective_number_of_betsPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisEffective_number_of_betsPostReturn {

		/** Required */
		PortfolioAnalysisEffective_number_of_betsPostReturnPortfolios: Array<PortfolioAnalysisEffective_number_of_betsPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisEffective_number_of_betsPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisEffective_number_of_betsPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisEffective_number_of_betsPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisEffective_number_of_betsPostReturnPortfolios {

		/**
		 * The effective number of bets of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioEffectiveNumberOfBets: number;
	}
	export interface PortfolioAnalysisEffective_number_of_betsPostReturnPortfoliosFormProperties {

		/**
		 * The effective number of bets of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioEffectiveNumberOfBets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisEffective_number_of_betsPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisEffective_number_of_betsPostReturnPortfoliosFormProperties>({
			portfolioEffectiveNumberOfBets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioAnalysisFactorsExposuresPostPostBody {

		/** Minimum items: 1 */
		PortfolioAnalysisFactorsExposuresPostPostBodyFactors?: Array<PortfolioAnalysisFactorsExposuresPostPostBodyFactors>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisFactorsExposuresPostPostBodyPortfolios: Array<PortfolioAnalysisFactorsExposuresPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisFactorsExposuresPostPostBodyFormProperties {
	}
	export function CreatePortfolioAnalysisFactorsExposuresPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisFactorsExposuresPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioAnalysisFactorsExposuresPostPostBodyFactors {

		/**
		 * factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length, equal to the common length of the portfolioReturns arrays
		 * Required
		 * Minimum items: 2
		 */
		factorReturns: Array<number>;
	}
	export interface PortfolioAnalysisFactorsExposuresPostPostBodyFactorsFormProperties {
	}
	export function CreatePortfolioAnalysisFactorsExposuresPostPostBodyFactorsFormGroup() {
		return new FormGroup<PortfolioAnalysisFactorsExposuresPostPostBodyFactorsFormProperties>({
		});

	}

	export interface PortfolioAnalysisFactorsExposuresPostPostBodyPortfolios {

		/**
		 * portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the common length of the factorReturns arrays
		 * Required
		 * Minimum items: 2
		 */
		portfolioReturns: Array<number>;
	}
	export interface PortfolioAnalysisFactorsExposuresPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisFactorsExposuresPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisFactorsExposuresPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisFactorsExposuresPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisFactorsExposuresPostReturnPortfolios: Array<PortfolioAnalysisFactorsExposuresPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisFactorsExposuresPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisFactorsExposuresPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisFactorsExposuresPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisFactorsExposuresPostReturnPortfolios {

		/**
		 * The portfolio alpha, which correponds to the portion of the portfolio returns that cannot be explained by the portfolio factor exposures
		 * Required
		 * Type: double
		 */
		portfolioAlpha: number;

		/**
		 * The portfolio betas, which correspond to the portfolio factor exposures
		 * Required
		 * Minimum items: 1
		 */
		portfolioBetas: Array<number>;

		/**
		 * The portfolio R^2, which indicates how much of the variability in the portfolio returns can be explained by the portfolio factor exposures; generally, the higher the R^2 the better the portfolio factor exposures explain the portfolio returns
		 * Required
		 * Type: double
		 */
		portfolioRSquared: number;
	}
	export interface PortfolioAnalysisFactorsExposuresPostReturnPortfoliosFormProperties {

		/**
		 * The portfolio alpha, which correponds to the portion of the portfolio returns that cannot be explained by the portfolio factor exposures
		 * Required
		 * Type: double
		 */
		portfolioAlpha: FormControl<number | null | undefined>,

		/**
		 * The portfolio R^2, which indicates how much of the variability in the portfolio returns can be explained by the portfolio factor exposures; generally, the higher the R^2 the better the portfolio factor exposures explain the portfolio returns
		 * Required
		 * Type: double
		 */
		portfolioRSquared: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisFactorsExposuresPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisFactorsExposuresPostReturnPortfoliosFormProperties>({
			portfolioAlpha: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			portfolioRSquared: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyConstraints;

		/**
		 * The number of portfolios to compute on the mean-variance efficient frontier
		 * Minimum: 2
		 */
		portfolios?: number | null;
	}
	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The number of portfolios to compute on the mean-variance efficient frontier
		 * Minimum: 2
		 */
		portfolios: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			portfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceEfficient_frontierPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisMean_varianceEfficient_frontierPostReturnPortfolios: Array<PortfolioAnalysisMean_varianceEfficient_frontierPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisMean_varianceEfficient_frontierPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceEfficient_frontierPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostReturnPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;

		/**
		 * The arithmetic return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioReturn: number;

		/**
		 * The volatility of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioVolatility: number;
	}
	export interface PortfolioAnalysisMean_varianceEfficient_frontierPostReturnPortfoliosFormProperties {

		/**
		 * The arithmetic return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioReturn: FormControl<number | null | undefined>,

		/**
		 * The volatility of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioVolatility: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisMean_varianceEfficient_frontierPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceEfficient_frontierPostReturnPortfoliosFormProperties>({
			portfolioReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			portfolioVolatility: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyConstraints;

		/**
		 * The number of portfolios to compute on the mean-variance minimum variance frontier
		 * Minimum: 2
		 */
		portfolios?: number | null;
	}
	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The number of portfolios to compute on the mean-variance minimum variance frontier
		 * Minimum: 2
		 */
		portfolios: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			portfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnPortfolios: Array<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;

		/**
		 * The arithmetic return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioReturn: number;

		/**
		 * The volatility of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioVolatility: number;
	}
	export interface PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnPortfoliosFormProperties {

		/**
		 * The arithmetic return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioReturn: FormControl<number | null | undefined>,

		/**
		 * The volatility of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioVolatility: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisMean_varianceMinimum_variance_frontierPostReturnPortfoliosFormProperties>({
			portfolioReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			portfolioVolatility: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioAnalysisReturnPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisReturnPostReturnPortfolios: Array<PortfolioAnalysisReturnPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisReturnPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisReturnPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisReturnPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisReturnPostReturnPortfolios {

		/**
		 * The arithmetic return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioReturn: number;
	}
	export interface PortfolioAnalysisReturnPostReturnPortfoliosFormProperties {

		/**
		 * The arithmetic return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioReturn: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisReturnPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisReturnPostReturnPortfoliosFormProperties>({
			portfolioReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisReturnsAveragePostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisReturnsAveragePostPostBodyPortfolios: Array<PortfolioAnalysisReturnsAveragePostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisReturnsAveragePostPostBodyFormProperties {
	}
	export function CreatePortfolioAnalysisReturnsAveragePostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisReturnsAveragePostPostBodyFormProperties>({
		});

	}

	export interface PortfolioAnalysisReturnsAveragePostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisReturnsAveragePostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisReturnsAveragePostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisReturnsAveragePostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisReturnsAveragePostReturn {

		/** Required */
		PortfolioAnalysisReturnsAveragePostReturnPortfolios: Array<PortfolioAnalysisReturnsAveragePostReturnPortfolios>;
	}
	export interface PortfolioAnalysisReturnsAveragePostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisReturnsAveragePostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisReturnsAveragePostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisReturnsAveragePostReturnPortfolios {

		/**
		 * The arithmetic average return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioAverageReturn: number;
	}
	export interface PortfolioAnalysisReturnsAveragePostReturnPortfoliosFormProperties {

		/**
		 * The arithmetic average return of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioAverageReturn: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisReturnsAveragePostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisReturnsAveragePostReturnPortfoliosFormProperties>({
			portfolioAverageReturn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioPostReturnPortfolios: Array<PortfolioAnalysisSharpe_ratioPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisSharpe_ratioPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioPostReturnPortfolios {

		/**
		 * The Sharpe ratio of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioSharpeRatio: number;
	}
	export interface PortfolioAnalysisSharpe_ratioPostReturnPortfoliosFormProperties {

		/**
		 * The Sharpe ratio of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioSharpeRatio: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioPostReturnPortfoliosFormProperties>({
			portfolioSharpeRatio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyPortfolios: Array<PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyPortfolios>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyFormProperties {

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyFormProperties>({
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 4
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioBias_adjustedPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnPortfolios: Array<PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioBias_adjustedPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnPortfolios {

		/**
		 * The bias-adjusted Sharpe ratio of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioBiasAdjustedSharpeRatio: number;
	}
	export interface PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnPortfoliosFormProperties {

		/**
		 * The bias-adjusted Sharpe ratio of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioBiasAdjustedSharpeRatio: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioBias_adjustedPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioBias_adjustedPostReturnPortfoliosFormProperties>({
			portfolioBiasAdjustedSharpeRatio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBody {

		/** The type of confidence interval to build */
		confidenceIntervalType?: PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyConfidenceIntervalType | null;

		/**
		 * The confidence level of the confidence interval to build, in percentage
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyPortfolios: Array<PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyPortfolios>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyFormProperties {

		/** The type of confidence interval to build */
		confidenceIntervalType: FormControl<PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyConfidenceIntervalType | null | undefined>,

		/**
		 * The confidence level of the confidence interval to build, in percentage
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyFormProperties>({
			confidenceIntervalType: new FormControl<PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyConfidenceIntervalType | null | undefined>(undefined),
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyConfidenceIntervalType { twoSided = 'twoSided', lowerOneSided = 'lowerOneSided', upperOneSided = 'upperOneSided' }

	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 4
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioConfidence_intervalPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnPortfolios: Array<PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnPortfolios {

		/**
		 * portfolioSharpeRatioConfidenceInterval[0] (resp. portfolioSharpeRatioConfidenceInterval[1]) is the lower (resp. upper) bound of the built confidence interval, possibly equal to null in case of a negative infinite (resp. positive infinite) bound
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		portfolioSharpeRatioConfidenceInterval: Array<number>;
	}
	export interface PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioConfidence_intervalPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostPostBody {

		/**
		 * The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values
		 * Required
		 * Type: double
		 */
		benchmarkSharpeRatio: number;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyPortfolios: Array<PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyPortfolios>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyFormProperties {

		/**
		 * The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values
		 * Required
		 * Type: double
		 */
		benchmarkSharpeRatio: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyFormProperties>({
			benchmarkSharpeRatio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 4
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioProbabilisticPostReturnPortfolios: Array<PortfolioAnalysisSharpe_ratioProbabilisticPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostReturnPortfolios {

		/**
		 * The probabilistic Sharpe ratio of the portfolio, in percentage
		 * Required
		 * Type: double
		 */
		portfolioProbabilisticSharpeRatio: number;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticPostReturnPortfoliosFormProperties {

		/**
		 * The probabilistic Sharpe ratio of the portfolio, in percentage
		 * Required
		 * Type: double
		 */
		portfolioProbabilisticSharpeRatio: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticPostReturnPortfoliosFormProperties>({
			portfolioProbabilisticSharpeRatio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBody {

		/**
		 * The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values
		 * Required
		 * Type: double
		 */
		benchmarkSharpeRatio: number;

		/**
		 * The confidence level of the minimum track record length, in percentage
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyPortfolios: Array<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyPortfolios>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyFormProperties {

		/**
		 * The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values
		 * Required
		 * Type: double
		 */
		benchmarkSharpeRatio: FormControl<number | null | undefined>,

		/**
		 * The confidence level of the minimum track record length, in percentage
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyFormProperties>({
			benchmarkSharpeRatio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 4
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnPortfolios: Array<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnPortfolios {

		/**
		 * The minimum track record length of the portfolio, in number of required arithmetic returns, possibly equal to null in case the minimum track record length does not exist
		 * Required
		 * Type: double
		 */
		portfolioSharpeRatioMinimumTrackRecordLength: number;
	}
	export interface PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnPortfoliosFormProperties {

		/**
		 * The minimum track record length of the portfolio, in number of required arithmetic returns, possibly equal to null in case the minimum track record length does not exist
		 * Required
		 * Type: double
		 */
		portfolioSharpeRatioMinimumTrackRecordLength: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisSharpe_ratioProbabilisticMinimum_track_record_lengthPostReturnPortfoliosFormProperties>({
			portfolioSharpeRatioMinimumTrackRecordLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisTracking_errorPostPostBody {

		/**
		 * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays
		 * Required
		 * Minimum items: 2
		 */
		benchmarkReturns: Array<number>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisTracking_errorPostPostBodyPortfolios: Array<PortfolioAnalysisTracking_errorPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisTracking_errorPostPostBodyFormProperties {
	}
	export function CreatePortfolioAnalysisTracking_errorPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisTracking_errorPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioAnalysisTracking_errorPostPostBodyPortfolios {

		/**
		 * portfolioReturns[t] is the return of the portfolio at the time t, the portfolioReturns must have the same length as the benchmarkReturns array
		 * Required
		 * Minimum items: 2
		 */
		portfolioReturns: Array<number>;
	}
	export interface PortfolioAnalysisTracking_errorPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisTracking_errorPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisTracking_errorPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisTracking_errorPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisTracking_errorPostReturnPortfolios: Array<PortfolioAnalysisTracking_errorPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisTracking_errorPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisTracking_errorPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisTracking_errorPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisTracking_errorPostReturnPortfolios {

		/**
		 * The tracking error of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioTrackingError: number;
	}
	export interface PortfolioAnalysisTracking_errorPostReturnPortfoliosFormProperties {

		/**
		 * The tracking error of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioTrackingError: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisTracking_errorPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisTracking_errorPostReturnPortfoliosFormProperties>({
			portfolioTrackingError: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioAnalysisUlcer_indexPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisUlcer_indexPostPostBodyPortfolios: Array<PortfolioAnalysisUlcer_indexPostPostBodyPortfolios>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioAnalysisUlcer_indexPostPostBodyFormProperties {

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisUlcer_indexPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_indexPostPostBodyFormProperties>({
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisUlcer_indexPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 2
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisUlcer_indexPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisUlcer_indexPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_indexPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisUlcer_indexPostReturn {

		/** Required */
		PortfolioAnalysisUlcer_indexPostReturnPortfolios: Array<PortfolioAnalysisUlcer_indexPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisUlcer_indexPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisUlcer_indexPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_indexPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisUlcer_indexPostReturnPortfolios {

		/**
		 * The Ulcer Index of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioUlcerIndex: number;
	}
	export interface PortfolioAnalysisUlcer_indexPostReturnPortfoliosFormProperties {

		/**
		 * The Ulcer Index of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioUlcerIndex: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisUlcer_indexPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_indexPostReturnPortfoliosFormProperties>({
			portfolioUlcerIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisUlcer_performance_indexPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisUlcer_performance_indexPostPostBodyPortfolios: Array<PortfolioAnalysisUlcer_performance_indexPostPostBodyPortfolios>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioAnalysisUlcer_performance_indexPostPostBodyFormProperties {

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisUlcer_performance_indexPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_performance_indexPostPostBodyFormProperties>({
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisUlcer_performance_indexPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 2
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisUlcer_performance_indexPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisUlcer_performance_indexPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_performance_indexPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisUlcer_performance_indexPostReturn {

		/** Required */
		PortfolioAnalysisUlcer_performance_indexPostReturnPortfolios: Array<PortfolioAnalysisUlcer_performance_indexPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisUlcer_performance_indexPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisUlcer_performance_indexPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_performance_indexPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisUlcer_performance_indexPostReturnPortfolios {

		/**
		 * The Ulcer Performance Index of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioUlcerPerformanceIndex: number;
	}
	export interface PortfolioAnalysisUlcer_performance_indexPostReturnPortfoliosFormProperties {

		/**
		 * The Ulcer Performance Index of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioUlcerPerformanceIndex: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisUlcer_performance_indexPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisUlcer_performance_indexPostReturnPortfoliosFormProperties>({
			portfolioUlcerPerformanceIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 5
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnPortfolios {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnPortfoliosFormProperties {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherPostReturnPortfoliosFormProperties>({
			portfolioConditionalValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 5
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnPortfolios {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnPortfoliosFormProperties {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalCornish_fisherCorrectedPostReturnPortfoliosFormProperties>({
			portfolioConditionalValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 3
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalGaussianPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalGaussianPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnPortfolios {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnPortfoliosFormProperties {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalGaussianPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalGaussianPostReturnPortfoliosFormProperties>({
			portfolioConditionalValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 2
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalHistoricalPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnPortfolios {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnPortfoliosFormProperties {

		/**
		 * The conditional value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioConditionalValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskConditionalHistoricalPostReturnPortfoliosFormProperties>({
			portfolioConditionalValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 5
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskCornish_fisherPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskCornish_fisherPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostReturnPortfolios {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherPostReturnPortfoliosFormProperties {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherPostReturnPortfoliosFormProperties>({
			portfolioValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 5
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnPortfolios {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnPortfoliosFormProperties {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskCornish_fisherCorrectedPostReturnPortfoliosFormProperties>({
			portfolioValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskGaussianPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskGaussianPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskGaussianPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskGaussianPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskGaussianPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskGaussianPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskGaussianPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 3
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskGaussianPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskGaussianPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskGaussianPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskGaussianPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskGaussianPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskGaussianPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskGaussianPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskGaussianPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskGaussianPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskGaussianPostReturnPortfolios {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskGaussianPostReturnPortfoliosFormProperties {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskGaussianPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskGaussianPostReturnPortfoliosFormProperties>({
			portfolioValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskHistoricalPostPostBody {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskHistoricalPostPostBodyPortfolios: Array<PortfolioAnalysisValue_at_riskHistoricalPostPostBodyPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskHistoricalPostPostBodyFormProperties {

		/**
		 * The confidence level
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceLevel: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskHistoricalPostPostBodyFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskHistoricalPostPostBodyFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioAnalysisValue_at_riskHistoricalPostPostBodyPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 * Minimum items: 2
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioAnalysisValue_at_riskHistoricalPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskHistoricalPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskHistoricalPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskHistoricalPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisValue_at_riskHistoricalPostReturnPortfolios: Array<PortfolioAnalysisValue_at_riskHistoricalPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisValue_at_riskHistoricalPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisValue_at_riskHistoricalPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskHistoricalPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisValue_at_riskHistoricalPostReturnPortfolios {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: number;
	}
	export interface PortfolioAnalysisValue_at_riskHistoricalPostReturnPortfoliosFormProperties {

		/**
		 * The value at risk of the portfolio
		 * Required
		 * Type: double
		 */
		portfolioValueAtRisk: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisValue_at_riskHistoricalPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisValue_at_riskHistoricalPostReturnPortfoliosFormProperties>({
			portfolioValueAtRisk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAnalysisVolatilityPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioAnalysisVolatilityPostReturnPortfolios: Array<PortfolioAnalysisVolatilityPostReturnPortfolios>;
	}
	export interface PortfolioAnalysisVolatilityPostReturnFormProperties {
	}
	export function CreatePortfolioAnalysisVolatilityPostReturnFormGroup() {
		return new FormGroup<PortfolioAnalysisVolatilityPostReturnFormProperties>({
		});

	}

	export interface PortfolioAnalysisVolatilityPostReturnPortfolios {

		/**
		 * The volatility of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioVolatility: number;
	}
	export interface PortfolioAnalysisVolatilityPostReturnPortfoliosFormProperties {

		/**
		 * The volatility of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioVolatility: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAnalysisVolatilityPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioAnalysisVolatilityPostReturnPortfoliosFormProperties>({
			portfolioVolatility: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioConstructionInvestablePostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present
		 * Minimum items: 1
		 */
		assetsGroupsWeights?: Array<number>;

		/**
		 * assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio
		 * Minimum items: 2
		 */
		assetsMinimumNotionalValues?: Array<number>;

		/**
		 * assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots)
		 * Minimum items: 2
		 */
		assetsMinimumPositions?: Array<number>;

		/**
		 * assetsPrices[i] is the price of the asset i
		 * Required
		 * Minimum items: 2
		 */
		assetsPrices: Array<number>;

		/**
		 * assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares)
		 * Minimum items: 2
		 */
		assetsSizeLots?: Array<number>;

		/**
		 * assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire)
		 * Minimum items: 2
		 */
		assetsWeights?: Array<number>;

		/**
		 * maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present
		 * Minimum items: 1
		 */
		maximumAssetsGroupsWeights?: Array<number>;

		/**
		 * The monetary value of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioValue: number;
	}
	export interface PortfolioConstructionInvestablePostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The monetary value of the portfolio
		 * Required
		 * Minimum: 0
		 */
		portfolioValue: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioConstructionInvestablePostPostBodyFormGroup() {
		return new FormGroup<PortfolioConstructionInvestablePostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			portfolioValue: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PortfolioConstructionInvestablePostReturn {

		/**
		 * assetsPositions[i] is the number of shares of the asset i in the portfolio
		 * Required
		 * Minimum items: 2
		 */
		assetsPositions: Array<number>;

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioConstructionInvestablePostReturnFormProperties {
	}
	export function CreatePortfolioConstructionInvestablePostReturnFormGroup() {
		return new FormGroup<PortfolioConstructionInvestablePostReturnFormProperties>({
		});

	}

	export interface PortfolioConstructionMimickingPostPostBody {

		/**
		 * Required
		 * Minimum items: 2
		 */
		PortfolioConstructionMimickingPostPostBodyAssets: Array<PortfolioConstructionMimickingPostPostBodyAssets>;

		/**
		 * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the assetReturns arrays
		 * Required
		 * Minimum items: 2
		 */
		benchmarkReturns: Array<number>;
		constraints?: PortfolioConstructionMimickingPostPostBodyConstraints;
	}
	export interface PortfolioConstructionMimickingPostPostBodyFormProperties {
	}
	export function CreatePortfolioConstructionMimickingPostPostBodyFormGroup() {
		return new FormGroup<PortfolioConstructionMimickingPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioConstructionMimickingPostPostBodyAssets {

		/**
		 * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
		 * Required
		 * Minimum items: 2
		 */
		assetReturns: Array<number>;
	}
	export interface PortfolioConstructionMimickingPostPostBodyAssetsFormProperties {
	}
	export function CreatePortfolioConstructionMimickingPostPostBodyAssetsFormGroup() {
		return new FormGroup<PortfolioConstructionMimickingPostPostBodyAssetsFormProperties>({
		});

	}

	export interface PortfolioConstructionMimickingPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioConstructionMimickingPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioConstructionMimickingPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioConstructionMimickingPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioConstructionMimickingPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioConstructionMimickingPostReturnFormProperties {
	}
	export function CreatePortfolioConstructionMimickingPostReturnFormGroup() {
		return new FormGroup<PortfolioConstructionMimickingPostReturnFormProperties>({
		});

	}

	export interface PortfolioConstructionRandomPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: number;
		constraints?: PortfolioConstructionRandomPostPostBodyConstraints;

		/**
		 * The number of portfolios to construct
		 * Minimum: 1
		 */
		portfolios?: number | null;
	}
	export interface PortfolioConstructionRandomPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 1
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The number of portfolios to construct
		 * Minimum: 1
		 */
		portfolios: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioConstructionRandomPostPostBodyFormGroup() {
		return new FormGroup<PortfolioConstructionRandomPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			portfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PortfolioConstructionRandomPostPostBodyConstraints {

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioConstructionRandomPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioConstructionRandomPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioConstructionRandomPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioConstructionRandomPostReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioConstructionRandomPostReturnPortfolios: Array<PortfolioConstructionRandomPostReturnPortfolios>;
	}
	export interface PortfolioConstructionRandomPostReturnFormProperties {
	}
	export function CreatePortfolioConstructionRandomPostReturnFormGroup() {
		return new FormGroup<PortfolioConstructionRandomPostReturnFormProperties>({
		});

	}

	export interface PortfolioConstructionRandomPostReturnPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 1
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioConstructionRandomPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioConstructionRandomPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioConstructionRandomPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioOptimizationEqual_risk_contributionsPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;
		constraints?: PortfolioOptimizationEqual_risk_contributionsPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationEqual_risk_contributionsPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationEqual_risk_contributionsPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_risk_contributionsPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationEqual_risk_contributionsPostPostBodyConstraints {

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;
	}
	export interface PortfolioOptimizationEqual_risk_contributionsPostPostBodyConstraintsFormProperties {
	}
	export function CreatePortfolioOptimizationEqual_risk_contributionsPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_risk_contributionsPostPostBodyConstraintsFormProperties>({
		});

	}

	export interface PortfolioOptimizationEqual_risk_contributionsPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationEqual_risk_contributionsPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationEqual_risk_contributionsPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_risk_contributionsPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationEqual_sharpe_ratio_contributionsPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 2
		 */
		assetsReturns: Array<number>;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioOptimizationEqual_sharpe_ratio_contributionsPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationEqual_sharpe_ratio_contributionsPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_sharpe_ratio_contributionsPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_sharpe_ratio_contributionsPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationEqual_volatility_weightedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsVolatilities[i] is the volatility of the asset i
		 * Required
		 * Minimum items: 2
		 */
		assetsVolatilities: Array<number>;
	}
	export interface PortfolioOptimizationEqual_volatility_weightedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationEqual_volatility_weightedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_volatility_weightedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationEqual_volatility_weightedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationEqual_volatility_weightedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationEqual_volatility_weightedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_volatility_weightedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationEqual_weightedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;
	}
	export interface PortfolioOptimizationEqual_weightedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationEqual_weightedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_weightedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationEqual_weightedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationEqual_weightedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationEqual_weightedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationEqual_weightedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationHierarchical_risk_parityPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/** The hierarchical clustering method to use */
		clusteringMethod?: AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null;

		/** The order to impose on the hierarchical clustering tree leaves */
		clusteringOrdering?: PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering | null;
		constraints?: PortfolioOptimizationHierarchical_risk_parityPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationHierarchical_risk_parityPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/** The hierarchical clustering method to use */
		clusteringMethod: FormControl<AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null | undefined>,

		/** The order to impose on the hierarchical clustering tree leaves */
		clusteringOrdering: FormControl<PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering | null | undefined>,
	}
	export function CreatePortfolioOptimizationHierarchical_risk_parityPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationHierarchical_risk_parityPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			clusteringMethod: new FormControl<AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null | undefined>(undefined),
			clusteringOrdering: new FormControl<PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering | null | undefined>(undefined),
		});

	}

	export enum PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering { 'r-hclust' = 'r-hclust', optimal = 'optimal' }

	export interface PortfolioOptimizationHierarchical_risk_parityPostPostBodyConstraints {

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationHierarchical_risk_parityPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationHierarchical_risk_parityPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationHierarchical_risk_parityPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationHierarchical_risk_parityPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationHierarchical_risk_parityPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationHierarchical_risk_parityPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationHierarchical_risk_parityPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBody {

		/** The allocation method to use across clusters */
		acrossClusterAllocationMethod?: PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod | null;

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/** The hierarchical clustering method to use */
		clusteringMethod?: AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null;

		/** The order to impose on the hierarchical clustering tree leaves */
		clusteringOrdering?: PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering | null;

		/**
		 * The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference
		 * Minimum: 1
		 */
		clusters?: number | null;
		constraints?: PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyConstraints;

		/** The allocation method to use within clusters */
		withinClusterAllocationMethod?: PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod | null;
	}
	export interface PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyFormProperties {

		/** The allocation method to use across clusters */
		acrossClusterAllocationMethod: FormControl<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod | null | undefined>,

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/** The hierarchical clustering method to use */
		clusteringMethod: FormControl<AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null | undefined>,

		/** The order to impose on the hierarchical clustering tree leaves */
		clusteringOrdering: FormControl<PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering | null | undefined>,

		/**
		 * The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference
		 * Minimum: 1
		 */
		clusters: FormControl<number | null | undefined>,

		/** The allocation method to use within clusters */
		withinClusterAllocationMethod: FormControl<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod | null | undefined>,
	}
	export function CreatePortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyFormProperties>({
			acrossClusterAllocationMethod: new FormControl<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod | null | undefined>(undefined),
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			clusteringMethod: new FormControl<AssetsCorrelationMatrixTheory_impliedPostPostBodyClusteringMethod | null | undefined>(undefined),
			clusteringOrdering: new FormControl<PortfolioOptimizationHierarchical_risk_parityPostPostBodyClusteringOrdering | null | undefined>(undefined),
			clusters: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			withinClusterAllocationMethod: new FormControl<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod | null | undefined>(undefined),
		});

	}

	export enum PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyAcrossClusterAllocationMethod { equalWeighting = 'equalWeighting', inverseVolatility = 'inverseVolatility', inverseVariance = 'inverseVariance' }

	export interface PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyConstraints {

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationHierarchical_risk_parityClustering_basedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationInverse_variance_weightedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsVariances[i] is the variance of the asset i
		 * Required
		 * Minimum items: 2
		 */
		assetsVariances: Array<number>;
	}
	export interface PortfolioOptimizationInverse_variance_weightedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationInverse_variance_weightedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationInverse_variance_weightedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationInverse_variance_weightedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationInverse_variance_weightedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationInverse_variance_weightedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationInverse_variance_weightedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationInverse_volatility_weightedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsVolatilities[i] is the volatility of the asset i
		 * Required
		 * Minimum items: 2
		 */
		assetsVolatilities: Array<number>;
	}
	export interface PortfolioOptimizationInverse_volatility_weightedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationInverse_volatility_weightedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationInverse_volatility_weightedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationInverse_volatility_weightedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationInverse_volatility_weightedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationInverse_volatility_weightedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationInverse_volatility_weightedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMarket_capitalization_weightedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsMarketCapitalizations[i] is the market capitalization of the asset i
		 * Required
		 * Minimum items: 2
		 */
		assetsMarketCapitalizations: Array<number>;
	}
	export interface PortfolioOptimizationMarket_capitalization_weightedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMarket_capitalization_weightedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMarket_capitalization_weightedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMarket_capitalization_weightedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMarket_capitalization_weightedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMarket_capitalization_weightedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMarket_capitalization_weightedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_decorrelationPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Minimum items: 1
		 */
		assetsReturns?: Array<number>;
		constraints?: PortfolioOptimizationMaximum_decorrelationPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMaximum_decorrelationPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_decorrelationPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_decorrelationPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMaximum_decorrelationPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_decorrelationPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_decorrelationPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_decorrelationPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_decorrelationPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_decorrelationPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_decorrelationPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_decorrelationPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_returnPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix?: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioOptimizationMaximum_returnPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMaximum_returnPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_returnPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMaximum_returnPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_returnPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_returnPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_returnPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_returnPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_returnPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_returnDiversifiedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix?: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioOptimizationMaximum_returnDiversifiedPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMaximum_returnDiversifiedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_returnDiversifiedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnDiversifiedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMaximum_returnDiversifiedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/**
		 * The relative tolerance over the maximum return portfolio return
		 * Minimum: 0
		 */
		deltaReturn?: number | null;

		/**
		 * The relative tolerance over the maximum return portfolio volatility, if applicable
		 * Minimum: 0
		 */
		deltaVolatility?: number | null;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_returnDiversifiedPostPostBodyConstraintsFormProperties {

		/**
		 * The relative tolerance over the maximum return portfolio return
		 * Minimum: 0
		 */
		deltaReturn: FormControl<number | null | undefined>,

		/**
		 * The relative tolerance over the maximum return portfolio volatility, if applicable
		 * Minimum: 0
		 */
		deltaVolatility: FormControl<number | null | undefined>,

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_returnDiversifiedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnDiversifiedPostPostBodyConstraintsFormProperties>({
			deltaReturn: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			deltaVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_returnDiversifiedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_returnDiversifiedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_returnDiversifiedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnDiversifiedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix?: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyConstraints;

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios?: number | null;

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null;

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null;

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize?: number | null;
	}
	export interface PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios: FormControl<number | null | undefined>,

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>,

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>,

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			subsetPortfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			subsetPortfoliosAggregationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>(undefined),
			subsetPortfoliosEnumerationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>(undefined),
			subsetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod { average = 'average', median = 'median' }

	export enum PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod { complete = 'complete', randomSampling = 'randomSampling' }

	export interface PortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioOptimizationMaximum_sharpe_ratioPostPostBodyConstraints;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyConstraints;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/**
		 * The relative tolerance over the maximum Sharpe ratio portfolio return
		 * Minimum: 0
		 */
		deltaReturn?: number | null;

		/**
		 * The relative tolerance over the maximum Sharpe ratio portfolio volatility
		 * Minimum: 0
		 */
		deltaVolatility?: number | null;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyConstraintsFormProperties {

		/**
		 * The relative tolerance over the maximum Sharpe ratio portfolio return
		 * Minimum: 0
		 */
		deltaReturn: FormControl<number | null | undefined>,

		/**
		 * The relative tolerance over the maximum Sharpe ratio portfolio volatility
		 * Minimum: 0
		 */
		deltaVolatility: FormControl<number | null | undefined>,

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostPostBodyConstraintsFormProperties>({
			deltaReturn: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			deltaVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioDiversifiedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;
		constraints?: PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyConstraints;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios?: number | null;

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null;

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null;

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize?: number | null;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios: FormControl<number | null | undefined>,

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>,

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>,

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			subsetPortfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			subsetPortfoliosAggregationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>(undefined),
			subsetPortfoliosEnumerationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>(undefined),
			subsetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_sharpe_ratioSubset_resampling_basedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyAssets: Array<PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyAssets>;
		constraints?: PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyConstraints;

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: number;
	}
	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyFormProperties {

		/**
		 * The risk free rate
		 * Required
		 * Type: double
		 */
		riskFreeRate: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyFormProperties>({
			riskFreeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyAssetsFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyAssetsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyAssetsFormProperties>({
		});

	}

	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_ulcer_performance_indexPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMaximum_ulcer_performance_indexPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMaximum_ulcer_performance_indexPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMaximum_ulcer_performance_indexPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;

		/** Required */
		constraints: PortfolioOptimizationMean_variance_efficientPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMean_variance_efficientPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMean_variance_efficientPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;

		/**
		 * The portfolio return; exclusive with portfolioVolatility and riskTolerance
		 * Type: double
		 */
		portfolioReturn?: number | null;

		/**
		 * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
		 * Minimum: 0
		 */
		portfolioVolatility?: number | null;

		/**
		 * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
		 * Minimum: 0
		 */
		riskTolerance?: number | null;
	}
	export interface PortfolioOptimizationMean_variance_efficientPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The portfolio return; exclusive with portfolioVolatility and riskTolerance
		 * Type: double
		 */
		portfolioReturn: FormControl<number | null | undefined>,

		/**
		 * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
		 * Minimum: 0
		 */
		portfolioVolatility: FormControl<number | null | undefined>,

		/**
		 * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
		 * Minimum: 0
		 */
		riskTolerance: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMean_variance_efficientPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			portfolioReturn: new FormControl<number | null | undefined>(undefined),
			portfolioVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			riskTolerance: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMean_variance_efficientPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMean_variance_efficientPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;

		/** Required */
		constraints: PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/**
		 * The relative tolerance over the mean-variance efficient portfolio return
		 * Minimum: 0
		 */
		deltaReturn?: number | null;

		/**
		 * The relative tolerance over the mean-variance efficient portfolio volatility
		 * Minimum: 0
		 */
		deltaVolatility?: number | null;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;

		/**
		 * The portfolio return; exclusive with portfolioVolatility and riskTolerance
		 * Type: double
		 */
		portfolioReturn?: number | null;

		/**
		 * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
		 * Minimum: 0
		 */
		portfolioVolatility?: number | null;

		/**
		 * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
		 * Minimum: 0
		 */
		riskTolerance?: number | null;
	}
	export interface PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyConstraintsFormProperties {

		/**
		 * The relative tolerance over the mean-variance efficient portfolio return
		 * Minimum: 0
		 */
		deltaReturn: FormControl<number | null | undefined>,

		/**
		 * The relative tolerance over the mean-variance efficient portfolio volatility
		 * Minimum: 0
		 */
		deltaVolatility: FormControl<number | null | undefined>,

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The portfolio return; exclusive with portfolioVolatility and riskTolerance
		 * Type: double
		 */
		portfolioReturn: FormControl<number | null | undefined>,

		/**
		 * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
		 * Minimum: 0
		 */
		portfolioVolatility: FormControl<number | null | undefined>,

		/**
		 * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
		 * Minimum: 0
		 */
		riskTolerance: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientDiversifiedPostPostBodyConstraintsFormProperties>({
			deltaReturn: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			deltaVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			portfolioReturn: new FormControl<number | null | undefined>(undefined),
			portfolioVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			riskTolerance: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientDiversifiedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMean_variance_efficientDiversifiedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMean_variance_efficientDiversifiedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientDiversifiedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Required
		 * Minimum items: 1
		 */
		assetsReturns: Array<number>;

		/** Required */
		constraints: PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyConstraints;

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios?: number | null;

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null;

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null;

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize?: number | null;
	}
	export interface PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios: FormControl<number | null | undefined>,

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>,

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>,

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			subsetPortfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			subsetPortfoliosAggregationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>(undefined),
			subsetPortfoliosEnumerationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>(undefined),
			subsetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;

		/**
		 * The portfolio return; exclusive with portfolioVolatility and riskTolerance
		 * Type: double
		 */
		portfolioReturn?: number | null;

		/**
		 * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
		 * Minimum: 0
		 */
		portfolioVolatility?: number | null;

		/**
		 * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
		 * Minimum: 0
		 */
		riskTolerance?: number | null;
	}
	export interface PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The portfolio return; exclusive with portfolioVolatility and riskTolerance
		 * Type: double
		 */
		portfolioReturn: FormControl<number | null | undefined>,

		/**
		 * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
		 * Minimum: 0
		 */
		portfolioVolatility: FormControl<number | null | undefined>,

		/**
		 * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
		 * Minimum: 0
		 */
		riskTolerance: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			portfolioReturn: new FormControl<number | null | undefined>(undefined),
			portfolioVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			riskTolerance: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMean_variance_efficientSubset_resampling_basedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_correlationPostPostBody {

		/**
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; required if assetsReturns is not provided
		 * Required
		 * Minimum items: 2
		 */
		assetsCorrelationMatrix: Array<string>;

		/**
		 * assetsVariances[i] is the volatility of the asset i; required if assetsCorrelationMatrix is provided and assetsVariances is not provided
		 * Required
		 * Minimum items: 2
		 */
		assetsVolatilities: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_correlationPostPostBodyFormProperties {

		/**
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_correlationPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_correlationPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMinimum_correlationPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_correlationPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_correlationPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_correlationPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_ulcer_indexPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioOptimizationMinimum_ulcer_indexPostPostBodyAssets: Array<PortfolioOptimizationMinimum_ulcer_indexPostPostBodyAssets>;
		constraints?: PortfolioOptimizationMinimum_ulcer_indexPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMinimum_ulcer_indexPostPostBodyFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_ulcer_indexPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_ulcer_indexPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_ulcer_indexPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_ulcer_indexPostPostBodyAssetsFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_ulcer_indexPostPostBodyAssetsFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_ulcer_indexPostPostBodyAssetsFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_ulcer_indexPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMinimum_ulcer_indexPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_ulcer_indexPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_ulcer_indexPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMinimum_ulcer_indexPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_ulcer_indexPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_ulcer_indexPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_ulcer_indexPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_variancePostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Minimum items: 1
		 */
		assetsReturns?: Array<number>;
		constraints?: PortfolioOptimizationMinimum_variancePostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMinimum_variancePostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_variancePostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_variancePostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMinimum_variancePostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMinimum_variancePostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_variancePostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_variancePostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMinimum_variancePostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_variancePostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_variancePostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_variancePostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_varianceDiversifiedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Minimum items: 1
		 */
		assetsReturns?: Array<number>;
		constraints?: PortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/**
		 * The relative tolerance over the minimum variance portfolio return, if applicable
		 * Minimum: 0
		 */
		deltaReturn?: number | null;

		/**
		 * The relative tolerance over the minimum variance portfolio volatility
		 * Minimum: 0
		 */
		deltaVolatility?: number | null;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyConstraintsFormProperties {

		/**
		 * The relative tolerance over the minimum variance portfolio return, if applicable
		 * Minimum: 0
		 */
		deltaReturn: FormControl<number | null | undefined>,

		/**
		 * The relative tolerance over the minimum variance portfolio volatility
		 * Minimum: 0
		 */
		deltaVolatility: FormControl<number | null | undefined>,

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_varianceDiversifiedPostPostBodyConstraintsFormProperties>({
			deltaReturn: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			deltaVolatility: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMinimum_varianceDiversifiedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_varianceDiversifiedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_varianceDiversifiedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_varianceDiversifiedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;

		/**
		 * assetsReturns[i] is the arithmetic return of asset i
		 * Minimum items: 1
		 */
		assetsReturns?: Array<number>;
		constraints?: PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyConstraints;

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios?: number | null;

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null;

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod?: PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null;

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize?: number | null;
	}
	export interface PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,

		/**
		 * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
		 * Minimum: 1
		 */
		subsetPortfolios: FormControl<number | null | undefined>,

		/** The method to aggregate the subset portfolios */
		subsetPortfoliosAggregationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>,

		/** The method to enumerate the subset portfolios */
		subsetPortfoliosEnumerationMethod: FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>,

		/**
		 * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
		 * Minimum: 2
		 */
		subsetSize: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
			subsetPortfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			subsetPortfoliosAggregationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosAggregationMethod | null | undefined>(undefined),
			subsetPortfoliosEnumerationMethod: new FormControl<PortfolioOptimizationMaximum_returnSubset_resampling_basedPostPostBodySubsetPortfoliosEnumerationMethod | null | undefined>(undefined),
			subsetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMinimum_varianceSubset_resampling_basedPostReturnFormProperties>({
		});

	}

	export interface PortfolioOptimizationMost_diversifiedPostPostBody {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: number;

		/**
		 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
		 * Required
		 * Minimum items: 2
		 */
		assetsCovarianceMatrix: Array<string>;
		constraints?: PortfolioOptimizationMost_diversifiedPostPostBodyConstraints;
	}
	export interface PortfolioOptimizationMost_diversifiedPostPostBodyFormProperties {

		/**
		 * The number of assets
		 * Required
		 * Minimum: 2
		 */
		assets: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMost_diversifiedPostPostBodyFormGroup() {
		return new FormGroup<PortfolioOptimizationMost_diversifiedPostPostBodyFormProperties>({
			assets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
		});

	}

	export interface PortfolioOptimizationMost_diversifiedPostPostBodyConstraints {

		/** Minimum items: 1 */
		assetsGroups?: Array<string>;

		/**
		 * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
		 * Minimum items: 1
		 */
		assetsGroupsMatrix?: Array<string>;

		/** maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided */
		maximumAssetsGroupsWeights?: Array<number>;

		/** maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage */
		maximumAssetsWeights?: Array<number>;

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure?: number | null;

		/** minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage */
		minimumAssetsWeights?: Array<number>;

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure?: number | null;
	}
	export interface PortfolioOptimizationMost_diversifiedPostPostBodyConstraintsFormProperties {

		/**
		 * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		maximumPortfolioExposure: FormControl<number | null | undefined>,

		/**
		 * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
		 * Minimum: 0
		 * Maximum: 1
		 */
		minimumPortfolioExposure: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioOptimizationMost_diversifiedPostPostBodyConstraintsFormGroup() {
		return new FormGroup<PortfolioOptimizationMost_diversifiedPostPostBodyConstraintsFormProperties>({
			maximumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			minimumPortfolioExposure: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export interface PortfolioOptimizationMost_diversifiedPostReturn {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 2
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioOptimizationMost_diversifiedPostReturnFormProperties {
	}
	export function CreatePortfolioOptimizationMost_diversifiedPostReturnFormGroup() {
		return new FormGroup<PortfolioOptimizationMost_diversifiedPostReturnFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingDrift_weightPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioSimulationRebalancingDrift_weightPostPostBodyAssets: Array<PortfolioSimulationRebalancingDrift_weightPostPostBodyAssets>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioSimulationRebalancingDrift_weightPostPostBodyPortfolios: Array<PortfolioSimulationRebalancingDrift_weightPostPostBodyPortfolios>;
	}
	export interface PortfolioSimulationRebalancingDrift_weightPostPostBodyFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingDrift_weightPostPostBodyFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingDrift_weightPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingDrift_weightPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface PortfolioSimulationRebalancingDrift_weightPostPostBodyAssetsFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingDrift_weightPostPostBodyAssetsFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingDrift_weightPostPostBodyAssetsFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingDrift_weightPostPostBodyPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 1
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioSimulationRebalancingDrift_weightPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingDrift_weightPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingDrift_weightPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingDrift_weightPostReturn {

		/** Required */
		PortfolioSimulationRebalancingDrift_weightPostReturnPortfolios: Array<PortfolioSimulationRebalancingDrift_weightPostReturnPortfolios>;
	}
	export interface PortfolioSimulationRebalancingDrift_weightPostReturnFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingDrift_weightPostReturnFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingDrift_weightPostReturnFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingDrift_weightPostReturnPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioSimulationRebalancingDrift_weightPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingDrift_weightPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingDrift_weightPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingFixed_weightPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioSimulationRebalancingFixed_weightPostPostBodyAssets: Array<PortfolioSimulationRebalancingFixed_weightPostPostBodyAssets>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioSimulationRebalancingFixed_weightPostPostBodyPortfolios: Array<PortfolioSimulationRebalancingFixed_weightPostPostBodyPortfolios>;
	}
	export interface PortfolioSimulationRebalancingFixed_weightPostPostBodyFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingFixed_weightPostPostBodyFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingFixed_weightPostPostBodyFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingFixed_weightPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface PortfolioSimulationRebalancingFixed_weightPostPostBodyAssetsFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingFixed_weightPostPostBodyAssetsFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingFixed_weightPostPostBodyAssetsFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingFixed_weightPostPostBodyPortfolios {

		/**
		 * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
		 * Required
		 * Minimum items: 1
		 */
		assetsWeights: Array<number>;
	}
	export interface PortfolioSimulationRebalancingFixed_weightPostPostBodyPortfoliosFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingFixed_weightPostPostBodyPortfoliosFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingFixed_weightPostPostBodyPortfoliosFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingFixed_weightPostReturn {

		/** Required */
		PortfolioSimulationRebalancingFixed_weightPostReturnPortfolios: Array<PortfolioSimulationRebalancingFixed_weightPostReturnPortfolios>;
	}
	export interface PortfolioSimulationRebalancingFixed_weightPostReturnFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingFixed_weightPostReturnFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingFixed_weightPostReturnFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingFixed_weightPostReturnPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioSimulationRebalancingFixed_weightPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingFixed_weightPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingFixed_weightPostReturnPortfoliosFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingRandom_weightPostPostBody {

		/**
		 * Required
		 * Minimum items: 1
		 */
		PortfolioSimulationRebalancingRandom_weightPostPostBodyAssets: Array<PortfolioSimulationRebalancingRandom_weightPostPostBodyAssets>;

		/**
		 * The number of portfolios to simulate
		 * Minimum: 1
		 */
		portfolios?: number | null;
	}
	export interface PortfolioSimulationRebalancingRandom_weightPostPostBodyFormProperties {

		/**
		 * The number of portfolios to simulate
		 * Minimum: 1
		 */
		portfolios: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioSimulationRebalancingRandom_weightPostPostBodyFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingRandom_weightPostPostBodyFormProperties>({
			portfolios: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PortfolioSimulationRebalancingRandom_weightPostPostBodyAssets {

		/**
		 * assetPrices[t] is the price of the asset at the time t
		 * Required
		 * Minimum items: 2
		 */
		assetPrices: Array<number>;
	}
	export interface PortfolioSimulationRebalancingRandom_weightPostPostBodyAssetsFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingRandom_weightPostPostBodyAssetsFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingRandom_weightPostPostBodyAssetsFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingRandom_weightPostReturn {

		/** Required */
		PortfolioSimulationRebalancingRandom_weightPostReturnPortfolios: Array<PortfolioSimulationRebalancingRandom_weightPostReturnPortfolios>;
	}
	export interface PortfolioSimulationRebalancingRandom_weightPostReturnFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingRandom_weightPostReturnFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingRandom_weightPostReturnFormProperties>({
		});

	}

	export interface PortfolioSimulationRebalancingRandom_weightPostReturnPortfolios {

		/**
		 * portfolioValues[t] is the value of the portfolio at the time t
		 * Required
		 */
		portfolioValues: Array<number>;
	}
	export interface PortfolioSimulationRebalancingRandom_weightPostReturnPortfoliosFormProperties {
	}
	export function CreatePortfolioSimulationRebalancingRandom_weightPostReturnPortfoliosFormGroup() {
		return new FormGroup<PortfolioSimulationRebalancingRandom_weightPostReturnPortfoliosFormProperties>({
		});

	}

}

