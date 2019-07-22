import * as React from "react";
import styled from "styled-components";
import "../../../assets/stylesheets/SupportUs.css";
import { DonateButton } from "../common/DonateButton";
import { Paper, Box, Typography } from '@material-ui/core'

const SupportUsPageWrapper = styled.div``;

export const SupportUs: React.FC = (): JSX.Element => {

  return (
    <SupportUsPageWrapper>
      <Paper style={{borderRadius: '0px', marginBottom: '16px', height: '320px'}}> {/* TODO: Remove hardcoded dimensions when content is added */}
        <Box style={{height: '100%', width: '25%'}}> {/* TODO: Remove hardcoded dimensions when content is added */}
          <Typography variant="h2" gutterBottom>
            Support Us
          </Typography>
        </Box>
      </Paper>
      <div style={{height: `${window.innerHeight-320}px`}}> {/* TODO: Remove hardcoded dimensions when content is added */}
        <Typography variant="h2">
            [TBD]
        </Typography>
      </div>
    </SupportUsPageWrapper>
  )
}
