<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>
  <xsl:template match="/">

    <html>
      <body>
        <h2 style="text-align:center">상품 발주</h2>
        <xsl:for-each select="products_list/product">
          <xsl:choose>
            <xsl:when test="amount &lt; 30">
              <xsl:value-of select="name"/> : 주문해야 할 상품<br/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="name"/> : 주문하지 않아도 되는 상품<br/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
