<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>
  <xsl:template match="/">

    <html>
      <body>
        <h2>상품 목록</h2>
        <xsl:for-each select="products_list/product">
          <xsl:if test="amount &lt; 30">
            <xsl:value-of select="name"/>
            <br/>
          </xsl:if>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
